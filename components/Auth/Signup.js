import styled from "styled-components";
import {
  Button,
  Avatar,
  TextField,
  FormControlLabel,
  Link,
  Grid,
  Typography,
  Container,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Signup = () => {
  return (
    <>
      <HomepageContainer container>
        <Grid container item lg={6} md={12}>
          <InfoContainer>
            <h3>HowYouDoin'?</h3>
            <SingupContainer>
              <Container maxWidth="xs">
                <FormContainer>
                  <UserAvatar>
                    <AccountCircleIcon />
                  </UserAvatar>
                  <Typography component="h1" variant="h5">
                    Sign Up
                  </Typography>
                  <SignupForm>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="name"
                      label="Full Name"
                      name="name"
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                    <RadioGroup aria-label="category" name="category">
                      <FormControlLabel
                        value="user"
                        control={<StyledRadio color="primary" />}
                        label="User"
                      />
                      <FormControlLabel
                        value="therapist"
                        control={<StyledRadio color="primary" />}
                        label="Therapist"
                      />
                    </RadioGroup>
                    <SubmitButton
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                    >
                      Sign In
                    </SubmitButton>
                    <Grid container>
                      <Grid item>
                        <FormLink href="/login" variant="body2">
                          {"Already have an accoubt? Login"}
                        </FormLink>
                      </Grid>
                    </Grid>
                  </SignupForm>
                </FormContainer>
              </Container>
            </SingupContainer>
          </InfoContainer>
        </Grid>
        <Grid container item lg={6} md={12}>
          <ImageContainer src="./vector-image.jpg" />
        </Grid>
      </HomepageContainer>
    </>
  );
};

export default Signup;

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
  /* justify-content: space-between; */
`;

const ImageContainer = styled.img`
  background: transparent;
  height: 100vh;
  margin-left: 0;
`;

const SingupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  font-size: 2rem;
`;

const FormContainer = styled.div`
  /* margin-top: 2rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserAvatar = styled(Avatar)`
  margin: 10px;
  &&& {
    background-color: rgb(0, 125, 254);
  }
`;

const SignupForm = styled.form`
  width: 100%;
  margin-top: 1rem;
`;

const SubmitButton = styled(Button)`
  &&& {
    background: rgb(0, 125, 254);
  }
`;

const FormLink = styled(Link)`
  &&& {
    color: rgb(27, 46, 53);
  }
`;

const StyledRadio = styled(Radio)``;
