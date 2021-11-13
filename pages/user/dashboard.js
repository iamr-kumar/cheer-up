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
        <Grid container spacing={6} className="cont">
          <Grid item xs={12} lg={4} sm={12} style={{ display: "grid" }}>
            <UserData
              name="Ahana"
              email="ahana@yahoo.com"
              city="Dumka"
              country="India"
              issue="blah blah blah"
              medication="trah trah trah"
            />
          </Grid>
          <Grid item xs={12} lg={8} sm={12} style={{ display: "grid" }}>
            <MoodGraph />
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default Dashboard;
