import React from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";

export const Chart1 = ({ data }) => {
  return (
    <BarChart width={700} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      {/* <Tooltip /> */}
      {/* <Legend /> */}
      <Bar dataKey="quantity" fill="#8884d8" />
    </BarChart>
  );
};
