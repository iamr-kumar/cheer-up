import styled from "styled-components";
import { Typography, Grid, Box } from "@material-ui/core";
import ActivityCard from "./ActivityCard";
import { Scrollbars } from "react-custom-scrollbars";

const User = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <div>
            <div>
              <Typography variant="h4">Hello, Ritik</Typography>
              <Typography variant="h5">How do you feel today?</Typography>
            </div>
            <InputArea>
              <Typography variant="subtitle1" color="textSecondary">
                Say what's in your mind and find things to do to make you feel
                better
              </Typography>
              <TextArea rows="20" cols="80"></TextArea>
            </InputArea>
          </div>
        </Grid>
        <Grid item xs={4}>
          <GridBox>
            <Typography variant="h5">Past Activities</Typography>
            <Scrollbars
              style={{ height: 620 }}
              universal={true}
              autoHide
              autoHideTimeout={1000}
              autoHideDuration={200}
            >
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
            </Scrollbars>
          </GridBox>
        </Grid>
      </Grid>
    </div>
  );
};

export default User;

const InputArea = styled.div`
  margin-top: 2rem;
`;

const TextArea = styled.textarea`
  border-radius: 1rem;
  border: 5px solid rgb(216, 216, 216);
  padding: 1rem;
  outline: none;
  /* font-size: 1.2rem; */
`;

const GridBox = styled(Box)`
  max-height: 75vh;
  overflow: hidden;
`;
