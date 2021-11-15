import { useState } from "react";
import styled from "styled-components";
import {
  Typography,
  Grid,
  Box,
  Button,
  CircularProgress,
  Snackbar,
} from "@material-ui/core";
import JournalList from "./JournalList";
import axios from "axios";
import Cookies from "js-cookie";
import MuiAlert from "@material-ui/lab/Alert";
import { baseUrl } from "../../utils/config";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

//journal writing page
const Journ = ({ user, list }) => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const token = Cookies.get("token");
  const [message, setMessage] = useState(null);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClose = () => {
    setMessage(null);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = axios.post(
        `${baseUrl}/api/user/journal/new`,
        { text },
        { headers: { "auth-token": token } }
      );

      setMessage({ type: "success", message: "Journal added!" });
    } catch (err) {
      console.log(err);
      setMessage({ type: "error", message: "Error adding journal!" });
    }
    setLoading(false);
  };

  return (
    <Section>
      <Grid container spacing={6} className="cont">
        <Grid item xs={12} lg={6} sm={12}>
          <div>
            <div>
              <Typography variant="h4">Hey {user.name}</Typography>
              <Typography variant="h6">
                Go on! Write your stories or journals.
              </Typography>
            </div>
            <InputArea>
              <TextArea
                rows="18"
                cols="50"
                name="text"
                onChange={handleChange}
              ></TextArea>
              <SubmitButton
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                {loading ? (
                  <CircularProgress color="inherit" size={24} />
                ) : (
                  "Submit"
                )}
              </SubmitButton>
            </InputArea>
          </div>
        </Grid>

        <Grid item xs={12} lg={5} sm={12}>
          <GridBox>
            <JournalList journals={list} />
          </GridBox>
        </Grid>
      </Grid>
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
  max-height: 95vh;
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
