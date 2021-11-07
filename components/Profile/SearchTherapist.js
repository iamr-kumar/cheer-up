import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import styled from "styled-components";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import TherapistCard from "./TherapistCard";
import axios from "axios";
import { baseUrl } from "../../utils/config";
import Cookies from "js-cookie";

const SearchTherapist = () => {
  const [loading, setLoading] = useState(true);
  const [suggestions, setSuggestions] = useState([]);
  const [searchText, setSearchText] = useState(null);
  const token = Cookies.get("token");
  const getSuggested = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/user-therapist/suggested`, {
        headers: { "auth-token": token },
      });
      setSuggestions(res.data.therapistProfile);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnchange = async (e) => {
    setSearchText(e.target.value);
    setLoading(true);
    try {
      await searchTherapist();
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const searchTherapist = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/user-therapist/search`, {
        headers: { "auth-token": token },
        params: {
          searchText,
        },
      });
      setSuggestions(res.data.therapistProfiles);
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const handleOnClick = async () => {
    setLoading(true);
    try {
      await searchTherapist();
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    getSuggested().then(() => {
      console.log("done");
    });
  }, []);

  return (
    <>
      <Container>
        <SearchBar>
          <SearchField
            id="outlined-basic"
            label="Search Therapist"
            variant="outlined"
            name="search"
            value={searchText}
            onChange={handleOnchange}
          />
          <SearchButton
            variant="contained"
            color="primary"
            onClick={handleOnClick}
          >
            Search
          </SearchButton>
        </SearchBar>
        <SuggestedTherapists>
          <SuggestedHeading>
            <LocationOnIcon />
            <Typography variant="body1">Therapists around you</Typography>
          </SuggestedHeading>
          {loading ? (
            <Loading>
              <CircularProgress />
            </Loading>
          ) : suggestions && suggestions.length > 0 ? (
            suggestions.map((therapist, index) => (
              <TherapistCard key={index} therapist={therapist} />
            ))
          ) : (
            <Loading>No therapists found</Loading>
          )}
        </SuggestedTherapists>
      </Container>
    </>
  );
};

export default SearchTherapist;

const Container = styled.div`
  padding: 1rem 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchBar = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
`;

const SearchField = styled(TextField)`
  &&& {
    margin-right: 0.5rem;
    width: 350px;
  }
`;

const SearchButton = styled(Button)`
  &&& {
    background-color: rgb(0, 125, 254);
  }
`;

const SuggestedTherapists = styled.div`
  width: 100%;
  margin-top: 2rem;
  padding: 0 1rem;
`;

const SuggestedHeading = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Loading = styled.div`
  width: 100%;
  text-align: center;
`;
