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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ActivityDetail = (props) => {
  const { handleClose, open, activity } = props;

  return (
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
          <Typography variant="h6">
            {activity !== null && activity.name}
          </Typography>
        </Toolbar>
      </AppBar>
    </Dialog>
  );
};

export default ActivityDetail;
