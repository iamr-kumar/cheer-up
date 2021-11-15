import React from "react";
import {
  Dialog,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  AppBar,
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";
import Moment from "react-moment";

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
              onClick={() => handleClose(null)}
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
                {journal.moods && journal.moods.join(", ")}
              </Typography>
            </TitleContainer>
            <JournalDate>
              <Typography variant="body1" color="textSecondary">
                <Moment format="MMMM Do YYYY">{journal.date}</Moment>
              </Typography>
            </JournalDate>
            <JournalDescription>
              <Typography variant="paragraph">{journal.text}</Typography>
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
