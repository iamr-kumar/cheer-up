import styled from "styled-components";
import { Card, CardMedia, Typography } from "@material-ui/core";

import React from "react";
import { Doughnut } from "react-chartjs-2";

//Each patient's mood graph
const MoodGraph = ({ moods }) => {
  const moodsArray = moods ? Object.keys(moods).map((key) => moods[key]) : null;

  const data = {
    labels: ["Happy", "Sadness", "Anger", "Joy", "Fear", "Tentative"],
    datasets: [
      {
        label: "Mood",

        backgroundColor: [
          "rgba(255, 206, 86, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 206, 86, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
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
        data: moodsArray.length > 0 ? moodsArray : [0, 0, 0, 0, 0, 0],
      },
    ],
  };
  return (
    <ChartDiv>
      <h2>Mood Graph for last month</h2>
      {moodsArray && moodsArray.length > 0 ? (
        <Doughnut
          data={data}
          height={500}
          width={500}
          options={{ maintainAspectRatio: false }}
          style={{ marginBottom: "40px" }}
        />
      ) : (
        <Typography variant="h5">No History Found</Typography>
      )}
    </ChartDiv>
  );
};
export default MoodGraph;

const ChartDiv = styled(Card)`
  margin: 1rem;
  margin-left: 0.5rem;
  margin-right: 1rem;
  padding: 1rem;
  height: 600px;
`;
const UserImg = styled(CardMedia)`
  height: 570px;
`;
