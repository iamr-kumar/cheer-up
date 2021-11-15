import { useRef, useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import styled from "styled-components";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import SendIcon from "@material-ui/icons/Send";
import Message from "./Message";
import { useRouter } from "next/router";

const ChatScreen = ({ socket, user }) => {
  const router = useRouter();
  const [messages, setMessages] = useState([]);
  const [reciever, setReciever] = useState(null);
  const [text, setText] = useState("");
  const endOfMessagesRef = useRef(null);

  const openChatId = useRef("");

  const scrollToBottom = () => {
    endOfMessagesRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const loadMessages = () => {
      socket.current.emit("loadMessages", {
        userId: user._id,
        messageWith: router.query.message,
      });
      socket.current.on("messagesLoaded", ({ chat }) => {
        setMessages(chat.messages);
        setReciever(chat.messageWith);
        openChatId.current = chat.messageWith._id;
        scrollToBottom();
      });

      socket.current.on("noChatFound", ({ user }) => {
        setReciever(user);
        openChatId.current = user._id;
      });
    };

    if (socket.current) {
      setMessages([]);
      loadMessages();
    }
  }, [router.query.message]);

  useEffect(() => {
    if (socket.current) {
      socket.current.on("messageSent", ({ newMessage }) => {
        if (newMessage.receiver === openChatId.current) {
          setMessages((prev) => [...prev, newMessage]);

          scrollToBottom();
        }
      });

      socket.current.on("newMessage", async ({ newMessage }) => {
        if (newMessage.sender === openChatId.current) {
          setMessages((prev) => [...prev, newMessage]);
          scrollToBottom();
        }
      });
    }
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    setText("");
    if (socket.current) {
      socket.current.emit("sendMessage", {
        userId: user._id,
        messageTo: openChatId.current,
        text,
      });
    }
  };

  return (
    <>
      <Container>
        <Header>
          <AccountCircle />
          <Typography variant="h6" style={{ marginLeft: "10px" }}>
            {reciever ? reciever.name : "Select a user"}
          </Typography>
        </Header>
        <MessageContainer>
          {messages.map((message, index) => (
            <Message messageWith={reciever} message={message} key={index} />
          ))}
          <EndOfMessage ref={endOfMessagesRef} />
        </MessageContainer>
        <InputContainer onSubmit={sendMessage}>
          <InsertEmoticonIcon />
          <Input value={text} onChange={(e) => setText(e.target.value)} />
          <SendButton type="submit" disabled={!text}>
            <SendIcon />
          </SendButton>
        </InputContainer>
      </Container>
    </>
  );
};

export default ChatScreen;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 850px;
  border: 2px solid whitesmoke;
  border-radius: 10px;
  height: 85vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: rgb(0, 125, 254);
  padding: 10px 15px;
  border-radius: 10px;
  color: white;
`;

const MessageContainer = styled.div`
  padding: 30px;
  min-height: 70vh;
  overflow-y: scroll;
`;
const InputContainer = styled.form`
  display: flex;
  align-items: center;
  padding: 10px;
  position: sticky;
  bottom: 0;
  background-color: white;
  z-index: 100;
`;

const Input = styled.input`
  flex: 1;
  outline: 0;
  border: none;
  border-radius: 10px;
  padding: 20px;
  margin-left: 15px;
  margin-right: 15px;
  background-color: whitesmoke;
`;

const EndOfMessage = styled.div`
  margin-bottom: 10px;
`;

const SendButton = styled.button`
  background-color: transparent;
  color: rgb(0, 125, 254);
  border: none;
`;
