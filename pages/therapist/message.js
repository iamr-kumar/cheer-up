import Layout from "../../components/Layout/Layout";
import styled from "styled-components";
import ChatScreen from "../../components/Layout/ChatScreen";
import Clients from "../../components/Therapist/Clients";

const Message = ({ user }) => {
  return (
    <>
      <Layout user={user}>
        <Container>
          <ClientList>
            <Clients />
          </ClientList>
          <ChatScreen />
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
`;

const ClientList = styled.div`
  width: 400px;
`;
