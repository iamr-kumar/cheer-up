import Layout from "../../components/Layout/Layout";
import ChooseActivity from "../../components/Profile/ChooseActivity";
import { Grid, Typography } from "@material-ui/core";
import Head from "next/head";
import styled from "styled-components";
const Activities = () => {
  return (
    <>
      <Head>
        <title>Activities</title>
      </Head>

      <Layout>
        <Heading>
          <Typography gutterBottom variant="h4" component="div" align="center">
            State Detected on the basis of analysis : <Field>Sad</Field>
          </Typography>
          <Typography gutterBottom variant="h5" component="div" align="center">
            Here's a collection of some activities you can perform to lighten up
            your mood!
          </Typography>
        </Heading>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <ChooseActivity btnText="Select" />
          </Grid>
          <Grid item xs={4}>
            <ChooseActivity btnText="Select" />
          </Grid>
          <Grid item xs={4}>
            <ChooseActivity btnText="Select" />
          </Grid>
          <Grid item xs={4}>
            <ChooseActivity btnText="Select" />
          </Grid>
          <Grid item xs={4}>
            <ChooseActivity btnText="Select" />
          </Grid>
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
