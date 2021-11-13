import styled from "styled-components";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Button,
} from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";

//patient cards in patient list
const PatientCard = ({ btnText, name, email, city, country }) => {
  return (
    <CustomCard>
      <CardActionArea>
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
            <Address>
              <RoomIcon /> {city},{country}
            </Address>
          </Banner>
        </CardContent>
        <SelectButton
          variant="contained"
          color="primary"
          href="/therapist/patient-info"
        >
          View Profile
        </SelectButton>
      </CardActionArea>
    </CustomCard>
  );
};
export default PatientCard;

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
    float: right;
  }
  &&&:hover {
    box-shadow: 3px 3px #c5c6d0;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserImg = styled.img`
  border-radius: 50%;
  height: 300px;
  width: 300px;
`;
