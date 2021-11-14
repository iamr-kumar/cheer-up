import { Typography } from "@material-ui/core";
import styled from "styled-components";

import Scrollbars from "react-custom-scrollbars";
import { Avatar } from "@material-ui/core";
import { useRouter } from "next/router";

const Clients = ({ clients }) => {
  const router = useRouter();
  return (
    <>
      <Container>
        <Header>
          <Typography variant="h4">Clients</Typography>
          <hr style={{ border: "2px solid whitesmoke" }} />
        </Header>
        <Scrollbars
          style={{ height: 550 }}
          universal={true}
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
        >
          {clients.map((client, index) => (
            <ClientCard
              onClick={() =>
                router.push(
                  `/therapist/message?message=${client.user._id}`,
                  undefined,
                  {
                    shallow: true,
                  }
                )
              }
              key={index}
            >
              <UserAvatar src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" />

              <UserInfo>
                <p>{client.user.name}</p>
                <LastMessage>{client.user.email}</LastMessage>
              </UserInfo>
            </ClientCard>
          ))}
        </Scrollbars>
      </Container>
    </>
  );
};

export default Clients;

const Container = styled.div``;

const Header = styled.div`
  text-align: center;
`;

const UserInfo = styled.div``;

const ClientCard = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  word-break: break-word;
  padding: 10px 15px;
  border-radius: 8px;

  :hover {
    background-color: rgb(0, 125, 254);
  }
  &:hover ${UserInfo} {
    color: white;
  }
`;

const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`;

const LastMessage = styled.p`
  font-size: 14px;
  color: #8e8e8e;
`;
