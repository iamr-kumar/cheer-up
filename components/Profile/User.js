import { useState } from "react";
import styled from "styled-components";
import {
  Typography,
  Grid,
  Box,
  Button,
  CircularProgress,
} from "@material-ui/core";
import ActivityCard from "./ActivityCard";
import { Scrollbars } from "react-custom-scrollbars";
import axios from "axios";

const User = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handlePress = async () => {
    const config = { "Content-type": "application/json" };
    setLoading(true);
    try {
      const res = await axios.post("/api/user/analyze-tone", { text }, config);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <div>
      <Grid container spacing={8}>
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
              <TextArea
                rows="20"
                cols="80"
                name="text"
                onChange={handleChange}
              ></TextArea>
              <SubmitButton
                type="submit"
                variant="contained"
                color="primary"
                onClick={handlePress}
              >
                {loading ? (
                  <CircularProgress color="inherit" size={25} />
                ) : (
                  "Submit"
                )}
              </SubmitButton>
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
  position: relative;
`;

const TextArea = styled.textarea`
  border-radius: 1rem;
  border: 5px solid rgb(216, 216, 216);
  padding: 1rem;
  outline: none;
  margin-bottom: 1rem;
  /* font-size: 1.2rem; */
`;

const GridBox = styled(Box)`
  max-height: 75vh;
  overflow: hidden;
`;

const SubmitButton = styled(Button)`
  &&& {
    width: 100px;
    position: absolute;
    bottom: -30px;
    left: 10px;
    background: rgb(0, 125, 254);
  }
`;
