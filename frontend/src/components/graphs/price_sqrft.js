import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

class PricevsSqrft extends PureComponent {
  render() {
    return (
      <BarChart
        width={1400}
        height={600}
        data={this.props.vsData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="price/sqrft" fill="green" />
      </BarChart>
    );
  }
}

export default PricevsSqrft;
