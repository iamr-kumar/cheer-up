import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Button,
} from "@material-ui/core";
import styled from "styled-components";

//Each card in activity shown after depicting mood
const ChooseActivity = ({ btnText, activity, handleOpen }) => {
  return (
    <CustomCard>
      <CardActionArea style={{ height: 450 }}>
        <CardMedia
          component="img"
          image={activity.imageUrl}
          alt={activity.name}
          height={250}
        />
        <CardContent>
          <Banner>
            <Typography gutterBottom variant="h5" component="div">
              {activity.name}
            </Typography>
          </Banner>
          <Typography variant="body1" color="textSecondary">
            {activity.description}
          </Typography>
        </CardContent>
        <SelectButton
          variant="contained"
          color="primary"
          onClick={() => handleOpen(activity)}
        >
          {btnText}
        </SelectButton>
      </CardActionArea>
    </CustomCard>
  );
};

export default ChooseActivity;

const CustomCard = styled(Card)`
  margin: 1rem;
  margin-left: 0.5rem;
  margin-right: 1rem;
  padding: 1rem;
`;

const Banner = styled.div`
  margin-bottom: 1rem;
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
