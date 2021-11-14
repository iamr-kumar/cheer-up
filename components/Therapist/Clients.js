import { Typography } from "@material-ui/core";
import styled from "styled-components";
import ClientCard from "../../components/Therapist/ClientCard";
import Scrollbars from "react-custom-scrollbars";

const Clients = () => {
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
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
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
