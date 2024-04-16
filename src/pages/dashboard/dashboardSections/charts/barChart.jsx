import React, { PureComponent } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, } from "recharts";

const barData = [
  {
    name: "Jan",
    Threats: 11,
  },
  {
    name: "Feb",
    Threats: 15,
  },
  {
    name: "Mar",
    Threats: 7,
  },
  {
    name: "Apr",
    Threats: 18,
  },
  {
    name: "May",
    
    Threats: 10,
    
  },
  {
    name: "Jun",
    
    Threats: 23,
    
  },
  {
    name: "Jul",
    Threats: 20,
    
  },
  {
    name: "Aug",
    Threats: 15,
    
  },
  {
    name: "Sept",
    Threats: 5,
    
  },
  {
    name: "Oct",
    Threats: 6,
    
  },
  {
    name: "Nov",
    Threats: 21,
    
  },
  {
    name: "Dec",
    Threats: 9,
    
  },
];

const SimpleBarChart = () => {
  // static demoUrl = "https://codesandbox.io/s/bar-chart-has-no-padding-jphoc";

  return (
    <BarChart
      width={600}
      height={300}
      data={barData}
      margin={{
        top: 5,
        right: 50,
        left: 20,
        bottom: 5,
      }}
      barSize={20}
    >
      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="Threats" fill="#FDAF33" background={{ fill: "#eee" }} />
    </BarChart>
  );
};

export default SimpleBarChart;