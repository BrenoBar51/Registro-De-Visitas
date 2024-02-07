 import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'Fortaleza', value: 2400 },
  { name: 'Maceio', value: 1800 },
  { name: 'São Paulo', value: 900 },
];

const COLORS = ['#D782FF', '#482b55', '#8f57aa'];

const PieChartCidade = () => {
  return (
    <div className="w-full h-full p-4">
      <PieChart width={450} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={110}
          labelLine={false}
          label={(entry) => `${entry.name} (${entry.value})`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {
            data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))
          }
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default PieChartCidade;
