import Layout from "../../components/Layout/Layout";
import PatientCard from "../../components/Therapist/PatientCard";
import { Grid, Typography } from "@material-ui/core";
import Head from "next/head";

const PatientList = () => {
  return (
    <>
      <Head>
        <title>Patient List</title>
      </Head>

      <Layout>
          <Typography gutterBottom variant="h3" component="div" align="center">
            Here's a list of all patients.
          </Typography>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <PatientCard name="Ahana" email="ahana@yahoo.com" city="Dumka" country="India"/>
          </Grid>
          <Grid item xs={4}>
            <PatientCard name="Ahana" email="ahana@yahoo.com" city="Dumka" country="India"/>
          </Grid>
          <Grid item xs={4}>
            <PatientCard name="Ahana" email="ahana@yahoo.com" city="Dumka" country="India"/>
          </Grid>
          <Grid item xs={4}>
            <PatientCard name="Ahana" email="ahana@yahoo.com" city="Dumka" country="India"/>
          </Grid>
          <Grid item xs={4}>
            <PatientCard name="Ahana" email="ahana@yahoo.com" city="Dumka" country="India" />
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default PatientList;