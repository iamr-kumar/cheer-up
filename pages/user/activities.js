import Layout from "../../components/Layout/Layout";
import ActivityCard from "../../components/Profile/ActivityCard";
import { Grid } from "@material-ui/core";

const Activities = () => {
  return (
    <Layout>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <ActivityCard />
        </Grid>
        <Grid item xs={4}>
          <ActivityCard />
        </Grid>
        <Grid item xs={4}>
          <ActivityCard />
        </Grid>
        <Grid item xs={4}>
          <ActivityCard />
        </Grid>
        <Grid item xs={4}>
          <ActivityCard />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Activities;
