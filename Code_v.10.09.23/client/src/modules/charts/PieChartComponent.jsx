import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const data = [
  { name: "Today", value: 400 },
  { name: "This week", value: 300 },
  { name: "This month", value: 300 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

class PieChartComponent extends PureComponent {
  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Legend
            height={10}
            wrapperStyle={{
              fontSize: "10px",
              width: "100%",
              bottom: 0,
            }}
          />
          <Tooltip />
          <Pie
            activeIndex={this.state.activeIndex}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

export default PieChartComponent;
