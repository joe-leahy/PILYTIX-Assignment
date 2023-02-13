import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const ReLineChart = (props) => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="lineTooltip">
          <p className="label">{`${label}`} Days Ago</p>
          <p className="value">Rep: {payload[0].value}</p>
          <p className="value">Px: {payload[1].value}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="95%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={props.data}
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="daysAgo"
          label={{ value: "Days Ago", position: "bottom", offset: -10 }}
          style={{ fontSize: 10 }}
        />
        <YAxis
          label={{
            value: "Probability",
            angle: -90,
            position: "insideBottomLeft",
            offset: 25
          }}
          style={{ fontSize: 10 }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line
          type="monotone"
          dataKey="repProb"
          stroke="#3cccab"
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="pilytixProb"
          stroke="#7CC7FB"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ReLineChart;
