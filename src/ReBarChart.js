import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const ReBarChart = (props) => {
  const factors = [...props.incFactors, ...props.decFactors];

  const getMessage = (label) => {
    for (let i = 0; i < factors.length; i++) {
      if (label === factors[i].name) {
        return factors[i].message;
      }
    }
  };
  // Display Data when hovering over bars in chart
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="tooltip">
          <p className="label">{`${label}`}</p>
          <p className="value">Factor Weight: {payload[0].value}</p>
          <p className="info">{getMessage(label)}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="95%" height="100%">
      <BarChart
        height={500}
        width={300}
        data={factors}
        margin={{
          top: 10,
          right: 0,
          left: -10,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" style={{ fontSize: 10 }} />
        <YAxis
          label={{
            value: "Weight",
            angle: -90,
            position: "insideMiddleLeft"
          }}
          style={{ fontSize: 10 }}
        />
        <ReferenceLine y={0} stroke="#000" />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="weight.value" name={"Hover for more Info"}>
          {factors.map((index) =>
            index.weight.value > 0 ? (
              <Cell key={`cell-${index}`} fill={"#3CCCAB"} />
            ) : (
              <Cell key={`cell-${index}`} fill={"rgb(211, 116, 116)"} />
            )
          )}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ReBarChart;
