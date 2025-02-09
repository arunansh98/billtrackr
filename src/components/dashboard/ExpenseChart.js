import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Netflix", value: 500 },
  { name: "Spotify", value: 199 },
  { name: "Amazon Prime", value: 999 },
  { name: "Adobe Creative Cloud", value: 1350 },
];

const COLORS = ["#FF5733", "#33FF57", "#337BFF", "#FF33A1"];

const ExpenseChart = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
      <h2 className="text-xl font-semibold mb-4">Expense Breakdown</h2>

      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ExpenseChart;
