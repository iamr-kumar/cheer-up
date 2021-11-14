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

// Individual patient info card
const PatientData = ({ name, email, city, country, issues, medication }) => {
  return (
    <CustomCard sx={{ maxWidth: 200 }}>
      <ImgContainer>
        <UserImg
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
          alt="patient img"
        />
      </ImgContainer>
      <CardContent>
        <Banner>
          <Name>{name}</Name>
          <Email>{email}</Email>
          {issues && issues.length > 0 && (
            <Typography variant="h6" color="textSecondary">
              Issues : {issues.join(", ")}
            </Typography>
          )}
          {medication && medication.length > 0 && (
            <Typography variant="h6" color="textSecondary">
              Medication : {medication.join(", ")}
            </Typography>
          )}
          <Address>
            <RoomIcon /> {city},{country}
          </Address>
        </Banner>
      </CardContent>
    </CustomCard>
  );
};
export default PatientData;

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

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserImg = styled.img`
  border-radius: 50%;
  height: 350px;
  width: 350px;
`;
