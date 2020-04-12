import React from "react";
import ZingChart from "zingchart-react";
import { generateChartValues } from "../utils/generateChartValues";

const config = {
  type: "pie",
  height: 350,
  plot: {
    borderColor: "#7E7F9A",
    borderWidth: 0.2,
    valueBox: {
      fontSize: "14",
      placement: "out",
      text: "%t: %v g ",
      fontFamily: "-apple-system,BlinkMacSystemFont",
    },
    tooltip: {
      text: "%t\n%npv%",
      "font-color": "black",
      "font-family": "-apple-system,BlinkMacSystemFont",
      "text-alpha": 1,
      "background-color": "white",
      alpha: 0.7,
      "border-width": 1,
      "border-color": "#cccccc",
      "line-style": "dotted",
      "border-radius": "10px",
      padding: "10%",
      placement: "node:out", //"node:out" or "node:center"
    },
  },
  series: [],
};

const generateValues = (digest) => {
  const digestValues = generateChartValues(digest);
  const newConfig = { ...config, series: digestValues };
  return newConfig;
};

const DietGraph = ({ digest }) => (
  <div>
    <ZingChart data={generateValues(digest)} />
  </div>
);

export default DietGraph;
