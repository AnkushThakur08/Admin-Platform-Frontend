import React from "react";

// Charts
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const AreaCharts = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data} margin={{ top: 30 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="AuthenticationMethod" />
        <YAxis allowDecimals={false} />

        <Tooltip />

        <Area
          type="monotone"
          dataKey="count"
          stroke="#1e3a8a"
          fill="#3b82f6"
        ></Area>
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaCharts;
