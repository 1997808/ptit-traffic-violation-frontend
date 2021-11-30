import React from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";

export const Chart1 = () => {
  const data = [
    { name: "Page A", uv: 400, pv: 2400 },
    { name: "Page B", uv: 300, pv: 1000 },
  ];

  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      {/* <Tooltip /> */}
      {/* <Legend /> */}
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  );
};
