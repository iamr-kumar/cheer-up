import { Typography } from "@material-ui/core";
import ActivityCard from "./ActivityCard";
import { Scrollbars } from "react-custom-scrollbars";

const ActivityList = () => {
  return (
    <>
      <Typography variant="h5">Activities</Typography>
      <Scrollbars
        style={{ height: 650 }}
        universal={true}
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
      >
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </Scrollbars>
    </>
  );
};

export default ActivityList;
