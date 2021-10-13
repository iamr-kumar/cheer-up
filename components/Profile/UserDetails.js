import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Grid,
  Button,
} from "@material-ui/core";
import styled from "styled-components";

const UserDetails = () => {
  return (
    <CustomCard sx={{ maxWidth: 345 }} height="400">
      <CardActionArea>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12} sm={12} lg={4}>
            <UserImg
              component="img"
              image="https://shtheme.com/demosd/medifine/wp-content/uploads/2017/07/doctor-single-2.jpg"
              alt="green iguana"
              maxwidth="300"
            />
            <SelectButton variant="contained" color="primary">
              {" "}
              Text now{" "}
            </SelectButton>
          </Grid>
          <Grid item xs={12} sm={12} lg={7}>
            <PsychDetails>
              <Typography gutterBottom variant="h3" component="div">
                <Name>Shruti Sharma</Name>
              </Typography>
              <Typography variant="h5" color="textSecondary">
                Psychologist
              </Typography>
              <Description>
                "I want to provide a safe space for healing and release of
                psychological & emotional wounds that often form the root human
                suffering. My aim is to make space for hope, happiness, and
                vitality in lives of people by taping into their innate wisdom
                while also honoring all kinds of experience, and stories with
                non-judgment. I believe that in validity of all human emotions
                and wish to mitigate the shame around around them so that
                healing can begin."
                <Field>Education - </Field>
                Master's in Clinical Psychology
                <Field>Experience -</Field>
                Trauma and Grief Therapist at a mental health NGO for vulnerable
                communities
                <Field>Contact No. -</Field>
                +91 7739240508
              </Description>
            </PsychDetails>
          </Grid>
        </Grid>
      </CardActionArea>
    </CustomCard>
  );
};

export default UserDetails;

const CustomCard = styled(Card)`
  margin: 1rem;
  margin-left: 0.5rem;
  margin-right: 1rem;
  padding: 2rem 2rem;
  text-align: center;
`;
const Name = styled.span`
  font-weight: bold;
`;
const UserImg = styled(CardMedia)`
  border-radius: 50%;
`;

const SelectButton = styled(Button)`
  &&& {
    margin-top: 1rem;
    background: rgb(0, 125, 254);
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-top: 2rem;
`;

const Field = styled.p`
  font-weight: bolder;
  margin-top: 1rem;
`;

const PsychDetails = styled(CardContent)`
  text-align: left;
`;
