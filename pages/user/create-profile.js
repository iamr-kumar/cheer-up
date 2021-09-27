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
} from "@material-ui/core";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import { useAuth } from "../context/AuthContext";

const createUserProfile = () => {
  const router = useRouter();

  const [formState, setFormState] = useState({
    issues: "",
    medication: "",
    country: "",
    city: "",
  });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log(formState);
    // setLoading(true);
    // try {
    //   await login(formState.email, formState.password);
    //   router.push("/user/profile");
    // } catch (err) {
    //   console.log(err);
    //   setLoading(false);
    // }
  };

  return (
    <>
      <Head>
        <title>Create Profile</title>
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
                    Create Profile
                  </Typography>
                  <SignupForm onSubmit={onSubmit}>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      id="issues"
                      label="What issues are you facing?"
                      name="issues"
                      placeholder="Separate your input using ,"
                      onChange={onChange}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      name="medication"
                      label="What medication are you on, if any?"
                      type="text"
                      id="medication"
                      placeholder="Separate your input using ,"
                      onChange={onChange}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      required
                      name="country"
                      label="Country"
                      type="text"
                      id="country"
                      onChange={onChange}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      required
                      name="city"
                      label="City"
                      type="text"
                      id="city"
                      onChange={onChange}
                    />

                    <SubmitButton
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                    >
                      {loading ? (
                        <CircularProgress color="inherit" />
                      ) : (
                        "Create Profile"
                      )}
                    </SubmitButton>
                  </SignupForm>
                </FormContainer>
              </Container>
            </SingupContainer>
          </InfoContainer>
        </Grid>
        <Grid container item lg={6} md={12}>
          <ImageContainer src="./../vector-image.jpg" />
        </Grid>
      </HomepageContainer>
    </>
  );
};

export default createUserProfile;

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
