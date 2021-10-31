import Layout from "../../components/Layout/Layout";
import Head from "next/head";
import TherapistDetails from "../../components/Profile/TherapistDetails";
import MoodGraph from "../../components/Therapist/MoodGraph";
import { Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import UserData from "../../components/Profile/UserData";

const Dashboard = ({ user }) => {
  return (
    <>
      <Head>
        <title>User Dashboard</title>
      </Head>
      <Layout user={user}>
        <Grid container spacing={6} justifyContent="center" className="cont">
          <Grid item xs={12} lg={4} sm={12}>
            <UserData
              name="Ahana"
              email="ahana@yahoo.com"
              city="Dumka"
              country="India"
              issue="blah blah blah"
              medication="trah trah trah"
            />
          </Grid>
          <Grid item xs={12} lg={8} sm={12}>
            <MoodGraph />
          </Grid>
          <Grid item xs={12} lg={12} sm={12}>
            <Heading>
              <Typography
                gutterBottom
                variant="h3"
                component="div"
                align="center"
              >
                My Therapist
              </Typography>
            </Heading>
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
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default Dashboard;

const Heading = styled.div`
  font-weight: bolder;
  margin-top: 20px;
`;
