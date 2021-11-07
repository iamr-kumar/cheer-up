import React from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  Snackbar,
  CircularProgress,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import MuiAlert from "@material-ui/lab/Alert";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import styled from "styled-components";
import axios from "axios";
import { baseUrl } from "../../utils/config";
import Cookies from "js-cookie";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const TherapistCard = ({ therapist }) => {
  const [loading, setLoading] = React.useState(false);
  const token = Cookies.get("token");
  const [message, setMessage] = React.useState(null);

  const sendRequest = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${baseUrl}/api/user-therapist/connect`,
        { therapistId: therapist._id },
        { headers: { "auth-token": token } }
      );

      setMessage({ type: "success", message: res.data.message });
    } catch (err) {
      console.log(err);
      setMessage({ type: "error", message: err.response.data.message });
    }
    setLoading(false);
  };

  const handleClose = () => setMessage(null);

  return (
    <>
      <Card>
        <CardContainer>
          <CardImage
            src="https://shtheme.com/demosd/medifine/wp-content/uploads/2017/07/doctor-single-2.jpg"
            alt="Doctor"
          />
          <div>
            <Typography variant="h5">{`Dr. ${therapist.name}`}</Typography>
            <Typography variant="subtitle1">
              {therapist.bio.substr(0, 20)}
            </Typography>

            <Rating>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarHalfIcon />
              <StarOutlineIcon />
            </Rating>
            <div style={{ margin: "10px 0px", display: "flex" }}>
              <LocationOnIcon />
              <Typography variant="subtitle2">{therapist.city}</Typography>
            </div>
            <DetailsButton
              variant="contained"
              color="primary"
              onClick={sendRequest}
            >
              {loading ? (
                <CircularProgress color="inherit" size="1.5rem" />
              ) : (
                "Connect"
              )}
            </DetailsButton>
          </div>
        </CardContainer>
      </Card>
      {message && (
        <Snackbar
          open={message !== null ? true : false}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity={message.type}>
            {message.message}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default TherapistCard;

const CardContainer = styled(CardContent)`
  display: flex;
  padding: 10px 5px;
`;

const CardImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-right: 1rem;
`;

const DetailsButton = styled(Button)`
  &&& {
    margin-top: 1rem;
    background-color: rgb(0, 125, 254);
  }
`;

const Rating = styled.div`
  margin: 14px 0px;
  display: flex;
  justify-content: baseline;
`;
