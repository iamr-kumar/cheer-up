import * as React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import styled from "styled-components";
import Moment from "react-moment";

//Individual card in journal list
const JournalCard = ({ journal, handleOpen }) => {
  const date = <Moment format="MMMM Do YYYY">{journal.date}</Moment>;

  return (
    <CustomCard sx={{ maxWidth: 345 }} onClick={() => handleOpen(journal)}>
      <CardHeader
        title={`Moods: ${journal.moods.join(", ")}`}
        subheader={date}
      />
      <CardContent>
        <Typography variant="body1">
          {journal.text.length > 100
            ? journal.text.substring(0, 100)
            : journal.text}
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
