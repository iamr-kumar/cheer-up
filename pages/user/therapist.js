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
            <TherapistDetails
              name="Shruti Sharma"
              field="Psychologist"
              bio="I want to provide a safe space for healing and release of
                psychological & emotional wounds that often form the root human
                suffering. My aim is to make space for hope, happiness, and
                vitality in lives of people by taping into their innate wisdom
                while also honoring all kinds of experience, and stories with
                non-judgment. I believe that in validity of all human emotions
                and wish to mitigate the shame around around them so that
                healing can begin."
              education="Master's in Clinical Psychology"
              experience="Trauma and Grief Therapist at a mental health NGO for vulnerable communities"
              contact="+91 7739240508"
              city="Kolkata"
              country="India"
              date="26-05-2001"
              rating="3.5"
            />
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
    const res = await axios.get(`${baseUrl}/api/user/me`, {
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
