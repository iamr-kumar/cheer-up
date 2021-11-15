import { Typography } from "@material-ui/core";
import React from "react";
import JournalCard from "./JournalCard";
import { Scrollbars } from "react-custom-scrollbars";
import JournalDetail from "./JournalDetail";
const JournalList = ({ journals }) => {
  const journal = {
    title: "I m the title",
    date: "September 14, 2016",
    detail:
      "Me detail.This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like.",
  };
  const [open, setOpen] = React.useState(false);
  const [currJournal, setCurrJournal] = React.useState(null);
  const handleToggle = (journal) => {
    setOpen(!open);
    setCurrJournal(journal);
  };
  return (
    <>
      <Typography variant="h5">Journals</Typography>
      {journals && journals.length > 0 ? (
        <Scrollbars
          style={{ height: 650 }}
          universal={true}
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
        >
          {journals.map((journal) => (
            <JournalCard journal={journal} handleOpen={handleToggle} />
          ))}
        </Scrollbars>
      ) : (
        <Typography variant="h6">Nothing to show here... yet</Typography>
      )}

      <JournalDetail
        handleClose={handleToggle}
        open={open}
        journal={currJournal}
      />
    </>
  );
};

export default JournalList;
