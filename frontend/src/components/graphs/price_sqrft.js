import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Label,
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
          left: 100,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis>
          <Label value="Price/Sqft" position="left" />
        </YAxis>
        <Tooltip />
        <Legend />
        <Bar dataKey="priceBysqrft" name="Address" fill="green" />
      </BarChart>
    );
  }
}
//
export default PricevsSqrft;
