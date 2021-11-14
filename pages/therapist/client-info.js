import Layout from "../../components/Layout/Layout";
import Head from "next/dist/next-server/lib/head";
import PatientData from "../../components/Therapist/PatientData";
import ActivityList from "../../components/Profile/ActivityList";
import JournalList from "../../components/Profile/JournalList";
import MoodGraph from "../../components/Therapist/MoodGraph";
import { Grid } from "@material-ui/core";
import { parseCookies } from "nookies";
import axios from "axios";
import { baseUrl } from "../../utils/config";

const PatientInfo = ({ user, userProfile, moodHistory, journals }) => {
  return (
    <>
      <Head>
        <title>Patient Info</title>
      </Head>
      <Layout user={user}>
        <Grid container spacing={6} className="cont">
          <Grid item xs={12} lg={4} sm={12} style={{ display: "grid" }}>
            <PatientData
              name={userProfile.user.name}
              email={userProfile.user.email}
              city={userProfile.city}
              country={userProfile.country}
              issues={userProfile.issues}
              medication={userProfile.medication}
            />
          </Grid>
          <Grid item xs={12} lg={8} sm={12} style={{ display: "grid" }}>
            <div>
              <MoodGraph />
            </div>
          </Grid>
          {/* <Grid item xs={12} lg={6} sm={12} style={{ display: "grid" }}>
            <div>
              <ActivityList />{" "}
            </div>
          </Grid>
          <Grid item xs={12} lg={6} sm={12} style={{ display: "grid" }}>
            <div>
              <JournalList />{" "}
            </div>
          </Grid> */}
        </Grid>
      </Layout>
    </>
  );
};

export default PatientInfo;

export async function getServerSideProps(context) {
  const { token } = parseCookies(context);
  const { id } = context.query;
  try {
    const res = await axios.get(`${baseUrl}/api/profile/user/${id}`, {
      headers: {
        "auth-token": token,
      },
    });
    const { userProfile, moodHistory, journals } = res.data;
    console.log(res.data);
    return {
      props: {
        userProfile,
        moodHistory,
        journals,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        err,
      },
    };
  }
}
