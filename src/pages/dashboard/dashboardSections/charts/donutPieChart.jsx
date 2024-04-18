import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Anomaly Detection site", "Percentage"],
  ["Domain Name System (DNS)", 2],
  ["Remote Desktop Protocol (RDP)", 4],
  ["Secure Shell (SSH)", 2],
  ["Simple Mail Transfer Protocol (SMTP)", 2],
  ["Others", 1], // CSS-style declaration
];

const options = {
  pieHole: 0.6,
  is3D: false,
  colors: ['#FFFF00', '#34FF85', '#1515E0', '#FFA500', '#E9E9E9'], // Custom colors
  chartArea: {  // Set margins for the chart area
    left: 10,
    top: 10,
    right: 10,
    bottom: 10,
    width: '100%',
    height: '100%',
  },
};

const DonutPieChart = () => {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="300px"
      data={data}
      options={options}
    />
  );
}

export default DonutPieChart;
