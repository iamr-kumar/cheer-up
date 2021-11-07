import Layout from "../../components/Layout/Layout";
import Head from "next/dist/next-server/lib/head";
import PatientData from "../../components/Therapist/PatientData";
import ActivityList from "../../components/Profile/ActivityList";
import JournalList from "../../components/Profile/JournalList";
import MoodGraph from "../../components/Therapist/MoodGraph";

import { Grid } from "@material-ui/core";
const PatientInfo = ({ user }) => {
  return (
    <>
      <Head>
        <title>Patient Info</title>
      </Head>
      <Layout user={user}>
        <Grid container spacing={6} className="cont">
          <Grid item xs={12} lg={4} sm={12}>
            <div>
              <PatientData
                name="Ahana"
                email="ahana@yahoo.com"
                city="Dumka"
                country="India"
                issue="blah blah blah"
                medication="trah trah trah"
              />
            </div>
          </Grid>
          <Grid item xs={12} lg={8} sm={12}>
            <div>
              <MoodGraph />
            </div>
          </Grid>
          <Grid item xs={12} lg={6} sm={12}>
            <div>
              <ActivityList />{" "}
            </div>
          </Grid>
          <Grid item xs={12} lg={6} sm={12}>
            <div>
              <JournalList />{" "}
            </div>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default PatientInfo;
