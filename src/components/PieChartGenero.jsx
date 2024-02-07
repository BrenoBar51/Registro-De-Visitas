import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'Masculino', value: 2400 },
  { name: 'Feminino', value: 1900 },
  { name: 'Outros', value: 500 },
];

const COLORS = ['#d782ff', '#ff8291', '#82ffa5'];

const PieChartGenero = () => {
  return (
    <div className="w-full h-full p-4">
      <PieChart width={400} height={400}>
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

export default PieChartGenero;
