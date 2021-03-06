import Head from "next/head";
import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";
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
  CircularProgress,
  Snackbar,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { registerUser } from "../utils/authUser";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Signup = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    category: "",
  });
  const router = useRouter();
  const [error, setError] = useState(null);

  const { name, email, password, category } = formState;

  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    console.log("called");
    e.preventDefault();
    setLoading(true);
    try {
      await registerUser({ name, email, password, category });
      category === "user" && router.push("/user/create-profile");
      category === "therapist" && router.push("/therapist/create-profile");
    } catch (err) {
      setError(err.response.data.errors[0].msg);
      setLoading(false);
    }
  };

  const handleDone = () => setError(null);

  return (
    <>
      <Head>
        <title>Signup</title>
      </Head>
      <HomepageContainer container>
        <Grid container item lg={6} md={12}>
          <InfoContainer>
            <h3>Cheer Up</h3>
            <SingupContainer>
              <Container maxWidth="xs">
                <FormContainer>
                  <UserAvatar>
                    <AccountCircleIcon />
                  </UserAvatar>
                  <Typography component="h1" variant="h5">
                    Sign Up
                  </Typography>
                  <SignupForm onSubmit={onSubmit}>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="name"
                      label="Full Name"
                      name="name"
                      onChange={onChange}
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
                      onChange={onChange}
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
                      onChange={onChange}
                    />
                    <RadioGroup
                      aria-label="category"
                      name="category"
                      onChange={onChange}
                    >
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
                      {loading ? (
                        <CircularProgress color="inherit" size="1.5em" />
                      ) : (
                        "Sign Up"
                      )}
                    </SubmitButton>
                    <Grid container>
                      <Grid item>
                        <FormLink href="/login" variant="body2">
                          {"Already have an account? Login"}
                        </FormLink>
                      </Grid>
                    </Grid>
                  </SignupForm>
                </FormContainer>
              </Container>
            </SingupContainer>
          </InfoContainer>
          <Snackbar
            open={error !== null ? true : false}
            autoHideDuration={6000}
            onClose={handleDone}
          >
            <Alert onClose={handleDone} severity="error">
              {error}
            </Alert>
          </Snackbar>
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
