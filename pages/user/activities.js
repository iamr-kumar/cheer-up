import React from "react";
import Layout from "../../components/Layout/Layout";
import ChooseActivity from "../../components/Profile/ChooseActivity";
import { Grid, Typography } from "@material-ui/core";
import Head from "next/head";
import styled from "styled-components";
import axios from "axios";
import { baseUrl } from "../../utils/config";
import { parseCookies } from "nookies";
import ActivityDetail from "../../components/Profile/ActivityDetail";

const Activities = ({ activities, tones, err, user, moodHistory }) => {
  const [open, setOpen] = React.useState(false);
  const [currActivity, setCurrActivity] = React.useState(null);

  const handleToggle = (activity) => {
    setOpen(!open);
    if (currActivity === null) setCurrActivity(activity);
    else setCurrActivity(null);
  };

  return (
    <>
      <Head>
        <title>Activities</title>
      </Head>

      <Layout user={user}>
        {activities.length > 0 ? (
          <>
            <Heading>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                align="center"
              >
                State Detected on the basis of analysis :{" "}
                <Field>{tones.join()}</Field>
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
              >
                Here's a collection of some activities you can perform to
                lighten up your mood!
              </Typography>
            </Heading>
            <Grid container spacing={3}>
              {activities.map((activity) => (
                <Grid item xs={6} md={4}>
                  <ChooseActivity
                    activity={activity}
                    btnText="Details"
                    handleOpen={handleToggle}
                  />
                </Grid>
              ))}
            </Grid>

            <ActivityDetail
              handleClose={handleToggle}
              open={open}
              activity={currActivity}
              moodHistory={moodHistory}
            />
          </>
        ) : (
          <Heading>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              align="center"
            >
              Sorry! Could Not Detect Mood. Please Try Again.
            </Typography>
          </Heading>
        )}
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
  const { token } = parseCookies(context);
  try {
    const res = await axios.post(
      `${baseUrl}/api/user/analyze-tone`,
      { text },
      {
        headers: {
          "auth-token": token,
        },
      }
    );

    return {
      props: {
        activities: res.data.activities,
        tones: res.data.tones,
        moodHistory: res.data.moodHistory,
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
