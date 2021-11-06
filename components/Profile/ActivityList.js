import { Typography } from "@material-ui/core";
import ActivityCard from "./ActivityCard";
import { Scrollbars } from "react-custom-scrollbars";

const ActivityList = ({ list }) => {
  console.log(list);
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
        {list.map((item, index) => (
          <ActivityCard key={index} item={item.length > 0 ? item[0] : null} />
        ))}
      </Scrollbars>
    </>
  );
};

export default ActivityList;
