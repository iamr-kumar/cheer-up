import {
    Typography,
  } from "@material-ui/core";
  import JournalCard from "./JournalCard";
  import { Scrollbars } from "react-custom-scrollbars";
  
  const JournalList = () => {
    return (
  <>
              <Typography variant="h5">Journals</Typography>
              <Scrollbars
                style={{ height: 650 }}
                universal={true}
                autoHide
                autoHideTimeout={1000}
                autoHideDuration={200}
              >
                <JournalCard />
                <JournalCard />
                <JournalCard />
                <JournalCard />
              </Scrollbars>
  </>
    );
  };
  
  export default JournalList;