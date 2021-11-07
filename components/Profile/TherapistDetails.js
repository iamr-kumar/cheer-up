import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Grid,
  Button,
  Table,
} from "@material-ui/core";
import styled from "styled-components";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarOutlineIcon from "@material-ui/icons/StarOutline";

//User's therapist info card in user dashboard
const TherapistDetails = ({
  name,
  field,
  bio,
  education,
  experience,
  contact,
  city,
  country,
  date,
  rating,
}) => {
  return (
    <>
      <CustomCard sx={{ maxWidth: 345 }} height="400">
        <CardActionArea>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} lg={4}>
              <UserImg
                src="https://shtheme.com/demosd/medifine/wp-content/uploads/2017/07/doctor-single-2.jpg"
                alt="green iguana"
              />
              <SelectButton variant="contained" color="primary">
                {" "}
                Text now{" "}
              </SelectButton>
            </Grid>
            <Grid item xs={12} sm={12} lg={7}>
              <PsychDetails>
                <Typography gutterBottom variant="h4" component="div">
                  <Name> {name} </Name>
                </Typography>
                <Typography variant="h5" color="textSecondary">
                  {field}
                </Typography>
                <Description>{bio}</Description>
                <Description>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} lg={4}>
                      <Field>Education </Field>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                      : {education}
                    </Grid>
                    <Grid item xs={12} sm={12} lg={4}>
                      <Field>Experience </Field>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                      : {experience}
                    </Grid>
                    <Grid item xs={12} sm={12} lg={4}>
                      <Field>Contact No. </Field>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                      : {contact}
                    </Grid>
                    <Grid item xs={12} sm={12} lg={4}>
                      <Field>Location </Field>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                      : {city},{country}
                    </Grid>
                    <Grid item xs={12} sm={12} lg={4}>
                      <Field>Rating </Field>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                      : <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarHalfIcon />
                      <StarOutlineIcon />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={4}>
                      <Field>Date Joined </Field>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                      : {date}
                    </Grid>
                  </Grid>
                </Description>
              </PsychDetails>
            </Grid>
          </Grid>
        </CardActionArea>
      </CustomCard>
    </>
  );
};

export default TherapistDetails;

const CustomCard = styled(Card)`
  margin: 1rem;
  margin-left: 0.5rem;
  margin-right: 1rem;
  padding: 2rem 2rem;
  text-align: center;
`;
const Name = styled.span`
  font-weight: 600;
`;
const UserImg = styled.img`
  border-radius: 50%;
  height: 400px;
  width: 400px;
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

const Field = styled.span`
  font-weight: bolder;
  margin-top: 1rem;
`;

const PsychDetails = styled(CardContent)`
  text-align: left;
`;
