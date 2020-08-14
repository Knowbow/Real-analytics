import React, { PureComponent } from "react";
import {
  BarChart,Bar,Cell,XAxis,YAxis,CartesianGrid,Tooltip,Legend,
} from "recharts";


class PriceToBuy extends PureComponent {
  
  
  render() {
    return (
      <BarChart
        width={1400}
        height={600}
        data={this.props.saleData}
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
        <Bar dataKey="pv" fill="blue" />
      </BarChart>
    );
  }
}

export default PriceToBuy;