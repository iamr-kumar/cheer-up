import styled from "styled-components";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";
import React from "react";
import { Bar, Line } from "react-chartjs-2";

const data = {
  labels: ["Angry", "Sad", "Fear", "Tentative", "Joy", "Happy"],
  datasets: [
    {
      label: "Mood",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(0, 125, 254,0.9)",
      borderColor: "rgba(0, 125, 254,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "round",
      pointBorderColor: "rgb(0, 125, 254,1)",
      pointBackgroundColor: "#fff",
      pointStyle: "circle",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgb(0, 125, 254,1)",
      pointHoverBorderColor: "rgba(0, 125, 254,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 5,
      pointHitRadius: 10,
      data: [25, 9, 10, 11, 8, 5, 4],
    },
  ],
};

//Each patient's mood graph
const MoodGraph = ({ name, email, city, country, issue, medication }) => {
  return (
    <CustomCard sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <div>
          <h2>Mood Graph for last month</h2>
          <Line data={data} height={190} />
        </div>

        <CardContent></CardContent>
      </CardActionArea>
    </CustomCard>
  );
};
export default MoodGraph;

const CustomCard = styled(Card)`
  margin: 1rem;
  margin-left: 0.5rem;
  margin-right: 1rem;
  padding: 1rem;
`;
const UserImg = styled(CardMedia)`
  height: 570px;
`;
