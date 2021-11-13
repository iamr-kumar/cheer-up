import * as React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import styled from "styled-components";

//Individual card in journal list
const JournalCard = ({ journal, handleOpen }) => {
  return (
    <CustomCard sx={{ maxWidth: 345 }} onClick={() => handleOpen(journal)}>
      <CardHeader
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body1">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
    </CustomCard>
  );
};

export default JournalCard;

const CustomCard = styled(Card)`
  margin: 1rem;
  margin-left: 0.5rem;
  margin-right: 1rem;
`;
