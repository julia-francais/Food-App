import React, { Component } from "react";
import ZingChart from "zingchart-react";
import { generateChartValues } from "../utils/generateChartValues";

// const DietGraph = ({ digest }) => {
//   console.log(digest);
//   return (
//     <div>
//       <ZingChart
//         type="pie"
//         id="chart6"
//         height="300"
//         width="600"
//         series={digest}
//         legend="true"
//         theme="light"
//         title="Light"
//       />
//     </div>
//   );
// };

const config = {
  type: "pie",
  height: 250,
  plot: {
    borderColor: "#7E7F9A",
    borderWidth: 0.5,
    valueBox: {
      fontSize: "14",
      placement: "out",
      text: "%t\n%npv%",
      fontFamily: "-apple-system,BlinkMacSystemFont",
    },
  },
  series: [],
};

const generateValues = (digest) => {
  const digestValues = generateChartValues(digest);
  const newConfig = { ...config, series: digestValues };
  console.log("config", newConfig);
  return newConfig;
};

const DietGraph = ({ digest }) => (
  <div>
    <ZingChart data={generateValues(digest)} />
  </div>
);

export default DietGraph;
