import { TextField, Button } from "@material-ui/core";
import styled from "styled-components";

const SearchTherapist = () => {
  return (
    <>
      <Container>
        <SearchBar>
          <SearchField id="outlined-basic" label="Search" variant="outlined" />
          <SearchButton variant="contained" color="primary">
            Search Therapist
          </SearchButton>
        </SearchBar>
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
