import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Janeiro', visitas: 3000 },
  { name: 'Fevereiro', visitas: 2000 },
  { name: 'Março', visitas: 2000 },
  { name: 'Abril', visitas: 2780 },
  { name: 'Maio', visitas: 1890 },
  { name: 'Junho', visitas: 2390 },
];

const BarChartComponent = () => {
  return (
    <div className="w-full h-full p-4">
      <BarChart width={400} height={200} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="visitas" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default BarChartComponent;
