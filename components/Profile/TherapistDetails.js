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
import { useRouter } from "next/router";

//User's therapist info card in user dashboard
const TherapistDetails = ({ therapist }) => {
  const router = useRouter();
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

              <SelectButton
                variant="contained"
                color="primary"
                onClick={() =>
                  router.push(
                    `/user/message?message=${therapist.user._id}`,
                    undefined,
                    { shallow: true }
                  )
                }
              >
                Text now
              </SelectButton>
            </Grid>
            <Grid item xs={12} sm={12} lg={7}>
              <PsychDetails>
                <Typography gutterBottom variant="h4" component="div">
                  <Name> {therapist.user.name} </Name>
                </Typography>
                <Typography variant="h5" color="textSecondary">
                  Psychologist
                </Typography>
                <Description>{therapist.bio}</Description>
                <Description>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} lg={4}>
                      <Field>Contact No. </Field>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                      : {therapist.mobile}
                    </Grid>
                    <Grid item xs={12} sm={12} lg={4}>
                      <Field>Location </Field>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                      : {therapist.city},{therapist.country}
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
                    {/* <Grid item xs={12} sm={12} lg={4}>
                      <Field>Date Joined </Field>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                      : {date}
                    </Grid> */}
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
