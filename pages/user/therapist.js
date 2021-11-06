import { Grid, Typography } from "@material-ui/core";
import TherapistDetails from "../../components/Profile/TherapistDetails";
import styled from "styled-components";
import Layout from "../../components/Layout/Layout";

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
          <TherapistDetails
            name="Shruti Sharma"
            field="Psychologist"
            bio="I want to provide a safe space for healing and release of
                psychological & emotional wounds that often form the root human
                suffering. My aim is to make space for hope, happiness, and
                vitality in lives of people by taping into their innate wisdom
                while also honoring all kinds of experience, and stories with
                non-judgment. I believe that in validity of all human emotions
                and wish to mitigate the shame around around them so that
                healing can begin."
            education="Master's in Clinical Psychology"
            experience="Trauma and Grief Therapist at a mental health NGO for vulnerable communities"
            contact="+91 7739240508"
            city="Kolkata"
            country="India"
            date="26-05-2001"
            rating="3.5"
          />
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
