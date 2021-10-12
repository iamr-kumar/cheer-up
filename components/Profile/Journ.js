import { useState } from "react";
import styled from "styled-components";
import {
  Typography,
  Grid,
  Box,
  Button,
  CircularProgress,
} from "@material-ui/core";
import ChooseActivity from "./ChooseActivity";
import { Scrollbars } from "react-custom-scrollbars";
import Link from "next/link";
const Journ = () => {
  return (
    <Section>
      <Grid container spacing={6} justifyContent="center" className="cont">
        <Grid item xs={12} lg={6} sm={12}>
          <div>
            <div>
              <Typography variant="h4">Hey Ritik</Typography>
              <Typography variant="h6">
                Go on! Write your stories or journals.
              </Typography>
            </div>
            <InputArea>
              <TextArea rows="12" cols="50" name="text"></TextArea>
              <SubmitButton type="submit" variant="contained" color="primary">
                {/* {loading ? (
                  <CircularProgress color="inherit" size={25} />
                ) : ( */}
                "Submit"
                {/* )} */}
              </SubmitButton>
            </InputArea>
          </div>
        </Grid>

        <Grid item xs={12} lg={5} sm={12}>
          <GridBox>
            <Typography variant="h5">Your Journals</Typography>
            <Scrollbars
              style={{ height: 650 }}
              universal={true}
              autoHide
              autoHideTimeout={1000}
              autoHideDuration={200}
            >
              <Link href="">
                <ChooseActivity btnText="See more" />
              </Link>
              <Link href="">
                <ChooseActivity btnText="See more" />
              </Link>
              <Link href="">
                <ChooseActivity btnText="See more" />
              </Link>
              <Link href="">
                <ChooseActivity btnText="See more" />
              </Link>
            </Scrollbars>
          </GridBox>
        </Grid>
      </Grid>
    </Section>
  );
};

export default Journ;

const InputArea = styled.div`
  margin-top: 1.5rem;
  position: relative;
`;

const Section = styled.div`
  margin-top: 1rem;
`;

const TextArea = styled.textarea`
  border-radius: 1rem;
  border: 5px solid rgb(216, 216, 216);
  padding: 1rem;
  outline: none;
  margin-bottom: 1rem;
  margin-top: 1rem;
  font-size: 1.2rem;

  &:focus {
    border: 5px solid rgb(0, 125, 254);
  }
`;

const GridBox = styled(Box)`
  max-height: 75vh;
  overflow: hidden;
  marging-top: 1rem;
`;

const SubmitButton = styled(Button)`
  &&& {
    position: absolute;
    bottom: -40px;
    left: 2px;
    background: rgb(0, 125, 254);
    font-size: 16px;
    color: #fff;
    border: 0;
    padding: 10px 15px;
    border-radius: 6px;
    cursor: pointer;
  }
`;
