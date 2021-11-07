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

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ActivityDetail = (props) => {
  const { handleClose, open, activity, moodHistory } = props;
  const [loading, setLoading] = React.useState(false);
  const [doneMessage, setDoneMessage] = React.useState(null);
  const token = Cookies.get("token");
  const classes = useStyles();

  const handleDone = () => setDoneMessage(null);

  const handleSelect = async () => {
    setLoading(true);
    try {
      const res = await axios.patch(
        `${baseUrl}/api/user/mood-history/${moodHistory._id}`,
        { activity: activity._id },
        { headers: { "auth-token": token } }
      );
      setDoneMessage("Activity added to your history");
    } catch (err) {
      setDoneMessage("Could not add activity. Try again");
    }
    setLoading(false);
  };

  return (
    activity !== null && (
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
            <Typography variant="h6">{activity.name}</Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <div>
            <ActivityDetailImage src={activity.imageUrl} alt={activity.name} />
            <TitleContainer>
              <Typography variant="h3" color="inherit">
                {activity.name}
              </Typography>
              <Button
                color="primary"
                variant="contained"
                onClick={handleSelect}
              >
                Select
              </Button>
            </TitleContainer>
            <ActivityDescription>{activity.detail}</ActivityDescription>
          </div>
        </Container>
        <Backdrop open={loading} className={classes.backdrop}>
          <CircularProgress color="primary" />
        </Backdrop>
        <Snackbar
          open={doneMessage !== null ? true : false}
          autoHideDuration={6000}
          onClose={handleDone}
        >
          <Alert onClose={handleDone} severity="success">
            {doneMessage}
          </Alert>
        </Snackbar>
      </Dialog>
    )
  );
};

export default ActivityDetail;

const Container = styled.div`
  padding: 6rem 2rem;
`;

const ActivityDetailImage = styled.img`
  width: 100%;
  height: 400px;
  margin-bottom: 1rem;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ActivityDescription = styled.p`
  margin-top: 1rem;
  margin-left: 1rem;
`;
