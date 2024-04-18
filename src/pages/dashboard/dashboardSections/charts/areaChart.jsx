import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: "Jan",
      Performance: 4,
    },
    {
      name: "Feb",
      Performance: 2,
    },
    {
      name: "Mar",
      Performance: 2,
    },
    {
      name: "Apr",
      Performance: 2.5,
    },
    {
      name: "May",
      
      Performance: 3,
      
    },
    {
      name: "Jun",
      
      Performance: 4,
      
    },
    {
      name: "Jul",
      Performance: 3.5,
      
    },
    {
      name: "Aug",
      Performance: 3,
      
    },
    {
      name: "Sept",
      Performance:3.7,
      
    },
    {
      name: "Oct",
      Performance: 3.8,
      
    },
    {
      name: "Nov",
      Performance: 3,
      
    },
    {
      name: "Dec",
      Performance: 3.7,
      
    },
  ];

const SimpleAreaChart = () => {
  

  
    return (
      <ResponsiveContainer height={150}>
        <AreaChart
          width={850}
          height={150}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Performance" stroke="#8884d8" fill="#FFF7EB" />
        </AreaChart>
      </ResponsiveContainer>
    
    );
  }


export default SimpleAreaChart
