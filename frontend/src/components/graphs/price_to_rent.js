import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";



class PriceToRent extends PureComponent {

  
  render() {
    return (
      <BarChart
        width={1000}
        height={600}
        data={this.props.rentData}
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
        <Bar dataKey="year_built" fill="#8884d8" />
      </BarChart>
    );
  }
}

export default PriceToRent;
