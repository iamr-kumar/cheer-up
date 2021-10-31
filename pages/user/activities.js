import Layout from "../../components/Layout/Layout";
import ChooseActivity from "../../components/Profile/ChooseActivity";
import { Grid, Typography } from "@material-ui/core";
import Head from "next/head";
import styled from "styled-components";
import { useRouter } from "next/router";
import axios from "axios";
import { baseUrl } from "../../utils/config";
const Activities = ({ activities, tones, err, user }) => {
  return (
    <>
      <Head>
        <title>Activities</title>
      </Head>

      <Layout user={user}>
        <Heading>
          <Typography gutterBottom variant="h4" component="div" align="center">
            State Detected on the basis of analysis :{" "}
            <Field>{tones.join()}</Field>
          </Typography>
          <Typography gutterBottom variant="h5" component="div" align="center">
            Here's a collection of some activities you can perform to lighten up
            your mood!
          </Typography>
        </Heading>
        <Grid container spacing={3}>
          {activities.map((activity) => (
            <Grid item xs={4}>
              <ChooseActivity activity={activity} btnText="Select" />
            </Grid>
          ))}
        </Grid>
      </Layout>
    </>
  );
};

export default Activities;

const Heading = styled.div`
  font-weight: bolder;
`;

const Field = styled.span`
  font-weight: bold;
`;

export async function getServerSideProps(context) {
  const { text } = context.query;
  try {
    const res = await axios.post(`${baseUrl}/api/user/analyze-tone`, { text });
    return {
      props: {
        activities: res.data.activities,
        tones: res.data.tones,
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
