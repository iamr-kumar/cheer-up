import { Grid, Typography } from "@material-ui/core";
import TherapistDetails from "../../components/Profile/TherapistDetails";
import styled from "styled-components";
import Layout from "../../components/Layout/Layout";
import SearchTherapist from "../../components/Profile/SearchTherapist";

const Therapist = ({ user }) => {
  return (
    <Layout user={user}>
      <Grid container>
        <Grid item xs={12} lg={12} sm={12}>
          <Heading>
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              align="center"
            >
              My Therapist
            </Typography>
          </Heading>
          <SearchTherapist />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Therapist;

const Heading = styled.div`
  font-weight: bolder;
  margin-top: 20px;
`;
