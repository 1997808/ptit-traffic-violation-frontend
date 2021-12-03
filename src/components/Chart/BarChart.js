import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

export const Chart1 = ({ data }) => {
  return (
    <ResponsiveContainer width="99%" height={500}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="10 10" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="quantity" fill="#8884D8" />
        <Bar dataKey="oto" fill="#D99F9A" />
        <Bar dataKey="xemay" fill="#D9C76F" />
        <Bar dataKey="xedien" fill="#79D9A2" />
      </BarChart>
    </ResponsiveContainer>
  );
};
