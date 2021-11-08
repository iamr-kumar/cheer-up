import React from "react";
import {
  Card,
  Typography,
  Button,
  CardContent,
  CircularProgress,
  Snackbar,
} from "@material-ui/core";
import styled from "styled-components";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MuiAlert from "@material-ui/lab/Alert";
import axios from "axios";
import { baseUrl } from "../../utils/config";
import Cookies from "js-cookie";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const RequestCard = ({ request, index, update }) => {
  const [acceptLoading, setAcceptLoading] = React.useState(false);
  const [rejectLoading, setRejectLoading] = React.useState(false);
  const [message, setMessage] = React.useState(null);
  const token = Cookies.get("token");
  const handleAccept = async () => {
    setAcceptLoading(true);
    try {
      const res = await axios.patch(
        `${baseUrl}/api/therapist/request/accept/${request._id}`,
        {},
        { headers: { "auth-token": token } }
      );
      setMessage({ type: "success", message: res.data.message });
      update(index);
    } catch (err) {
      console.log(err);
      setMessage({ type: "error", message: "Some error occurred!" });
    }
    setAcceptLoading(false);
  };

  const handleReject = async () => {
    setRejectLoading(true);
    try {
      const res = await axios.patch(
        `${baseUrl}/api/therapist/request/reject/${req._id}`,
        {},
        { headers: { "auth-token": token } }
      );
      setMessage({ type: "success", message: res.data.message });
      update(index);
    } catch (err) {
      console.log(err);
      setMessage({ type: "error", message: "Some error occurred" });
    }
    setRejectLoading(false);
  };

  const handleClose = () => setMessage(null);

  return (
    <>
      <CustomCard>
        <CardContainer>
          <CardImage
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
            alt="User"
          />
          <div>
            <Typography variant="h5">{request.user.user.name}</Typography>
            <Typography variant="subtitle1">
              {request.user.issues && request.user.issues.join(",")}
            </Typography>

            <div style={{ margin: "10px 0px", display: "flex" }}>
              <LocationOnIcon />
              <Typography variant="subtitle2">{request.user.city}</Typography>
            </div>
            <ResponseButtons>
              <AcceptButton variant="contained" onClick={handleAccept}>
                {acceptLoading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  "Accept"
                )}
              </AcceptButton>
              <RejectButton variant="contained" onClick={handleReject}>
                {rejectLoading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  "Reject"
                )}
              </RejectButton>
            </ResponseButtons>
          </div>
        </CardContainer>
      </CustomCard>
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

export default RequestCard;

const CustomCard = styled(Card)`
  width: 600px;
  margin: 1rem 0;
`;

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

const ResponseButtons = styled.div`
  display: flex;
`;

const AcceptButton = styled(Button)`
  &&& {
    background-color: rgb(102, 187, 106);
    margin-right: 0.5rem;
    color: white;
  }
`;

const RejectButton = styled(Button)`
  &&& {
    color: white;
    margin-left: 0.5rem;
    background-color: rgb(244, 67, 54);
  }
`;
