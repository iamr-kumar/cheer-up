import Head from "next/head";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import {
  Button,
  Avatar,
  TextField,
  Link,
  Grid,
  Typography,
  Container,
  CircularProgress,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { loginUser } from "../utils/authUser";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Login = () => {
  const router = useRouter();

  const [formState, setFormState] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { email, password } = formState;

  const onChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const res = await loginUser({ email, password });

      router.push("/user/profile");
    } catch (err) {
      setError(err.response.data.errors[0].msg);
      setLoading(false);
    }
  };

  const handleDone = () => setError(null);

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <HomepageContainer container>
        <Grid container item lg={6} md={12}>
          <InfoContainer>
            <h3>Cheer Up</h3>
            <SingupContainer>
              <Container maxWidth="xs">
                <FormContainer>
                  <UserAvatar>
                    <LockOutlinedIcon />
                  </UserAvatar>
                  <Typography component="h1" variant="h5">
                    Login
                  </Typography>
                  <SignupForm onSubmit={onSubmit}>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
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
                    {/* <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    /> */}
                    <SubmitButton
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                    >
                      {loading ? (
                        <CircularProgress color="inherit" size="1.5rem" />
                      ) : (
                        "Log in"
                      )}
                    </SubmitButton>
                    <Grid container>
                      <Grid item>
                        <FormLink href="/signup" variant="body2">
                          {"Don't have an account? Sign Up"}
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

export default Login;

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
