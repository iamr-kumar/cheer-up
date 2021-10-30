import styled from "styled-components";
  import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActionArea,
  } from "@material-ui/core";
import RoomIcon from '@material-ui/icons/Room';

//Each patient's mood graph
  const MoodGraph = ({ name,email,city,country,issue,medication }) => {
    return (
      <CustomCard sx={{ maxWidth: 200 }}>
        <CardActionArea>
        <UserImg
              component="img"
              image="https://datavizproject.com/wp-content/uploads/2015/10/1-Line-Chart.png"
              alt="patient img"
            />
          <CardContent>
            
          </CardContent>
        </CardActionArea>
      </CustomCard>
    );
  };
  export default MoodGraph;

  const CustomCard = styled(Card)`
    margin: 1rem;
    margin-left: 0.5rem;
    margin-right: 1rem;
    padding:1rem;
  `;
  const UserImg = styled(CardMedia)`
  height : 570px;
`;
