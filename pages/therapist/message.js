import { useState, useRef, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import styled from "styled-components";
import ChatScreen from "../../components/Layout/ChatScreen";
import Clients from "../../components/Therapist/Clients";
import { parseCookies } from "nookies";
import axios from "axios";
import { Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import io from "socket.io-client";

import { baseUrl } from "../../utils/config";

const Message = ({ user, clients, err }) => {
  const router = useRouter();
  const socket = useRef();
  const [connectedUsers, setConnectedUsers] = useState([]);

  useEffect(() => {
    if (!socket.current) {
      socket.current = io(baseUrl);
    } else {
      socket.current.emit("join", { userId: user._id });
      socket.current.on("connectedUsers", ({ users }) => {
        users.length > 0 && setConnectedUsers(users);
      });
    }
  });

  return (
    <>
      <Layout user={user}>
        <Container>
          <ClientList>
            <Clients clients={clients} />
          </ClientList>
          {router.query.message ? (
            <ChatScreen socket={socket} user={user} />
          ) : (
            <DisplayMessage>
              <Typography variant="h4">
                See Messages from you Clients
              </Typography>
            </DisplayMessage>
          )}
        </Container>
      </Layout>
    </>
  );
};

export default Message;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 2rem;
  overflow-y: hidden;
`;

const ClientList = styled.div`
  width: 400px;
`;

const DisplayMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export async function getServerSideProps(context) {
  const { token } = parseCookies(context);
  try {
    const res = await axios.get(`${baseUrl}/api/therapist/clients`, {
      headers: { "auth-token": token },
    });
    return {
      props: {
        clients: res.data.therapist.client,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        err,
      },
    };
  }
}
