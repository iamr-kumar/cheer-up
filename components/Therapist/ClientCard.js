import { Avatar } from "@material-ui/core";
import styled from "styled-components";

import { useRouter } from "next/router";

const ClientCard = ({}) => {
  return (
    <Container>
      <UserAvatar src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"></UserAvatar>

      <UserInfo>
        <p>Ritik Kumar</p>
        <UserEmail>ritik.kumar006@gmail.com</UserEmail>
      </UserInfo>
    </Container>
  );
};

export default ClientCard;

const Container = styled.div`
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

const UserInfo = styled.div``;

const UserEmail = styled.p`
  font-style: italic;
  font-size: 14px;
  color: #8e8e8e;
`;
