import React from "react";
import {
  Dialog,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  AppBar,
  Button,
  Backdrop,
  CircularProgress,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";
import axios from "axios";
import { baseUrl } from "../../utils/config";
import Cookies from "js-cookie";
import { makeStyles } from "@material-ui/core/styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const JournalDetail = (props) => {
  const { handleClose, open, journal } = props;

  return (
    journal !== null && (
      <Dialog
        fullScreen
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <AppBar style={{ background: "rgb(0, 125, 254)" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6">{journal.title}</Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <div>
            <TitleContainer>
              <Typography variant="h4" color="inherit">
                {journal.title}
              </Typography>
            </TitleContainer>
            <JournalDate>
              <Typography variant="body1" color="textSecondary">
                {journal.date}
              </Typography>
            </JournalDate>
            <JournalDescription>
              <Typography variant="paragraph">{journal.detail}</Typography>
            </JournalDescription>
          </div>
        </Container>
      </Dialog>
    )
  );
};

export default JournalDetail;

const Container = styled.div`
  padding: 6rem 8rem;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const JournalDescription = styled.p`
  margin-top: 1rem;
`;

const JournalDate = styled.p`
  margin-top: 1rem;
`;
