import { Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import Layout from "../../components/Layout/Layout";
import SearchTherapist from "../../components/Profile/SearchTherapist";
import { parseCookies } from "nookies";
import axios from "axios";
import { baseUrl } from "../../utils/config";
import TherapistDetails from "../../components/Profile/TherapistDetails";

const Therapist = ({ user, profile }) => {
  return (
    <Layout user={user}>
      <Grid container>
        <Grid item xs={12} lg={12} sm={12}>
          <Heading>
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              align="center"
            >
              {profile.therapist ? "My Therapist" : "Find a Therapist"}
            </Typography>
          </Heading>
          {profile.therapist ? (
            <TherapistDetails therapist={profile.therapist} />
          ) : (
            <SearchTherapist />
          )}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Therapist;

const Heading = styled.div`
  font-weight: bolder;
  margin-top: 20px;
`;

export async function getServerSideProps(context) {
  const { token } = parseCookies(context);
  try {
    const res = await axios.get(`${baseUrl}/api/profile/me`, {
      headers: { "auth-token": token },
    });

    return {
      props: {
        profile: res.data.profile,
      },
    };
  } catch (err) {
    return {
      props: {
        err: JSON.stringify(err),
      },
    };
  }
}
