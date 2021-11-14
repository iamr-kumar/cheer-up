import { Typography } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import styled from "styled-components";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import SendIcon from "@material-ui/icons/Send";

const ChatScreen = () => {
  const scrollToBottom = () => {
    endOfMessagesRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Container>
        <Header>
          <AccountCircle />
          <Typography variant="h6" style={{ marginLeft: "10px" }}>
            Anisha Singh
          </Typography>
        </Header>
        <MessageContainer></MessageContainer>
        <InputContainer>
          <InsertEmoticonIcon />
          <Input />
          <SendButton type="submit">
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
  min-height: 85vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: whitesmoke;
  padding: 10px 15px;
  border-radius: 10px;
`;

const MessageContainer = styled.div`
  padding: 30px;

  flex: 3;
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

const SendButton = styled.button`
  background-color: transparent;
  color: rgb(0, 125, 254);
  border: none;
`;
