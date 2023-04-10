import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Assignment 1",
    marks: 57,
  },
  {
    name: "Assignment 2",

    marks: 60,
  },
  {
    name: "Assignment 3",
    marks: 60,
  },
  {
    name: "Assignment 4",
    marks: 58,
  },
  {
    name: "Assignment 5",
    marks: 59,
  },
  {
    name: "Assignment 6",
    marks: 58,
  },
  {
    name: "Assignment 7",
    marks: 60,
  },
  {
    name: "Assignment 8",
    marks: 60,
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <div className="flex flex-col items-center justify-center my-5">
        <h1 className="text-center text-5xl my-5">Assignment Marks</h1>

        <div className="my-5" style={{ width: "70%", height: 300 }}>
          <ResponsiveContainer>
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="marks"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}
