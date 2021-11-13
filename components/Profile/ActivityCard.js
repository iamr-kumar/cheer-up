import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Button,
} from "@material-ui/core";
import styled from "styled-components";

//Individual activity card in activity list
const ActivityCard = ({ item }) => {
  return (
    item !== null && (
      <CustomCard sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={item.activity.imageUrl}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.activity.name}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {item.activity.description}
            </Typography>
            <Typography variant="body2" style={{ marginTop: 4 }}>
              Done on : {new Date(item.date).toLocaleDateString()}
            </Typography>
            <Typography variant="body2" style={{ marginTop: 4 }}>
              Moods: {item.moods.join(", ")}
            </Typography>
          </CardContent>
        </CardActionArea>
      </CustomCard>
    )
  );
};

export default ActivityCard;

const CustomCard = styled(Card)`
  margin: 1rem;
  margin-left: 0.5rem;
  margin-right: 1rem;
`;
