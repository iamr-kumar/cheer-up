import styled from "styled-components";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Button,
  Box,
} from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";

//User info card in dashboard
const UserData = ({ name, email, city, country, issue, medication }) => {
  return (
    <CustomCard sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <UserImg
          component="img"
          image="https://shtheme.com/demosd/medifine/wp-content/uploads/2017/07/doctor-single-2.jpg"
          alt="patient img"
        />
        <CardContent>
          <Banner>
            <Name>{name}</Name>
            <Email>{email}</Email>
            <Typography variant="h6" color="textSecondary">
              Issue : {issue}
            </Typography>
            <Typography variant="h6" color="textSecondary">
              Medication : {medication}
            </Typography>
            <Address>
              <RoomIcon /> {city},{country}
            </Address>
          </Banner>
        </CardContent>
        <Box textAlign="center">
          <SelectButton variant="contained" color="primary">
            {" "}
            Text now{" "}
          </SelectButton>
        </Box>
      </CardActionArea>
    </CustomCard>
  );
};
export default UserData;

const CustomCard = styled(Card)`
  margin: 1rem;
  margin-left: 0.5rem;
  margin-right: 1rem;
  padding: 1rem;
`;

const Banner = styled.div`
  margin-top: 1rem;
  text-align: center;
`;
const Name = styled.p`
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5rem;
`;
const Address = styled.p`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const Email = styled.p`
  color: grey;
  font-size: 22px;
  text-align: center;
  margin-bottom: 0.5rem;
`;
const SelectButton = styled(Button)`
  &&& {
    background: rgb(0, 125, 254);
  }
  &&&:hover {
    box-shadow: 3px 3px #c5c6d0;
  }
`;
const UserImg = styled(CardMedia)`
  border-radius: 50%;
  height: 350px;
`;
