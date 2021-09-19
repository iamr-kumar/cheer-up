import styled from "styled-components";
import { Button, Grid } from "@material-ui/core";
import Link from "next/link";

const Homepage = () => {
  return (
    <>
      <HomepageContainer container>
        <Grid container item lg={6} md={12}>
          <InfoContainer>
            <h3>HowYouDoin'?</h3>
            <MainContainer>
              <Container>
                <h1>Relax.</h1>
                <h1 style={{ color: "rgb(0, 125, 254)" }}>Communicate.</h1>
                <h1>Get Better.</h1>
                <MutedText>
                  You are not alone. Find activities to make you feel better.
                  Stay in touch with your therapist and let them help you.
                </MutedText>
                <ButtonsContainer>
                  <Link href="/signup">
                    <SignupButton variant="contained" color="primary">
                      Signup
                    </SignupButton>
                  </Link>
                  <Link href="/login">
                    <LoginButton color="primary">Login</LoginButton>
                  </Link>
                </ButtonsContainer>
              </Container>
            </MainContainer>
          </InfoContainer>
        </Grid>
        <Grid container item lg={6} md={12}>
          <ImageContainer src="./vector-image.jpg" />
        </Grid>
      </HomepageContainer>
    </>
  );
};

export default Homepage;

const HomepageContainer = styled(Grid)`
  height: 100vh;
`;

const InfoContainer = styled.div`
  border-radius: 1rem;
  font-family: "Roboto", sans-serif;
  border: 5px solid rgb(216, 216, 216);
  border-radius: 2rem;
  flex-grow: 1;
  height: 90vh;
  margin: 2rem;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  h3 {
    letter-spacing: 1px;
  }
`;

const ImageContainer = styled.img`
  height: 100vh;
  margin-left: 0;
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  font-size: 2rem;
`;

const Container = styled.div``;

const MutedText = styled.p`
  font-size: 1rem;
  color: rgb(182, 183, 193);
  width: 80%;
  margin-top: 1rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  width: 60%;
`;

const SignupButton = styled(Button)`
  &&& {
    margin-right: 1rem;
    background: rgb(0, 125, 254);
  }
`;

const LoginButton = styled(Button)`
  &&& {
    border: 2px solid rgb(0, 125, 254);
    color: rgb(0, 125, 254);
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
