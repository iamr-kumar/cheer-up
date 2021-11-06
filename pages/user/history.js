import axios from "axios";
import { baseUrl } from "../../utils/config";
import Layout from "../../components/Layout/Layout";
import Head from "next/dist/next-server/lib/head";
import { parseCookies } from "nookies";
import { Grid, Typography } from "@material-ui/core";
import ActivityCard from "../../components/Profile/ActivityCard";

const History = ({ pastActivities, user }) => {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <Layout user={user}>
        <Typography variant="h4" style={{ marginTop: "1rem" }}>
          Past Activities
        </Typography>
        <Grid container spacing={3}>
          {pastActivities.map(
            (item, index) =>
              item.length > 0 && (
                <Grid item md={6} lg={4} xs={12} key={index}>
                  <ActivityCard key={index} item={item[0]} />
                </Grid>
              )
          )}
        </Grid>
      </Layout>
    </>
  );
};

export default History;

export async function getServerSideProps(context) {
  const { token } = parseCookies(context);
  try {
    const res = await axios.get(`${baseUrl}/api/user/activities`, {
      headers: {
        "auth-token": token,
      },
    });

    return {
      props: {
        pastActivities: res.data.activityHistory,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        err: JSON.stringify(err),
      },
    };
  }
}
