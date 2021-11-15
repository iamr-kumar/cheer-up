import Layout from "../../components/Layout/Layout";
import Head from "next/head";
import TherapistDetails from "../../components/Profile/TherapistDetails";
import MoodGraph from "../../components/Therapist/MoodGraph";
import { Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import { baseUrl } from "../../utils/config";

import { parseCookies } from "nookies";
import axios from "axios";
import PatientData from "../../components/Therapist/PatientData";

const Dashboard = ({ user, err, profile, moodPercentage }) => {
  return (
    <>
      <Head>
        <title>User Dashboard</title>
      </Head>
      <Layout user={user}>
        <Grid container spacing={6} className="cont">
          <Grid item xs={12} lg={4} sm={12} style={{ display: "grid" }}>
            <PatientData
              name={profile.user.name}
              email={profile.user.email}
              city={profile.city}
              country={profile.country}
              issues={profile.issues}
              medication={profile.medication}
            />
          </Grid>
          <Grid item xs={12} lg={8} sm={12} style={{ display: "grid" }}>
            <MoodGraph moods={moodPercentage} />
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default Dashboard;

export async function getServerSideProps(context) {
  const { token } = parseCookies(context);
  try {
    const res = await axios.get(`${baseUrl}/api/profile/me`, {
      headers: {
        "auth-token": token,
      },
    });
    console.log(res.data.profile);
    return {
      props: {
        profile: res.data.profile,
        moodPercentage: res.data.moodPercentage,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        err: err.response.data,
      },
    };
  }
}
