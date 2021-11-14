import Layout from "../../components/Layout/Layout";
import styled from "styled-components";
import ChatScreen from "../../components/Layout/ChatScreen";

const Message = ({ user }) => {
  return (
    <>
      <Layout user={user}>
        <Container>
          <ChatScreen />
        </Container>
      </Layout>
    </>
  );
};

export default Message;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
