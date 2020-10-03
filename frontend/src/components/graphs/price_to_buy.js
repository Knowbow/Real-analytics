import React, { PureComponent } from "react";
import {
  BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend,Label,
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
          left: 100,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis>
          <Label value="Sale Price" position="left" />
        </YAxis>
        <Tooltip />
        <Legend />
        <Bar dataKey="apt_sale_price" name="Address" fill="blue" />
      </BarChart>
    );
  }
}
//
export default PriceToBuy;