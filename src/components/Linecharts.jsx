 import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', aldeota: 350, Parangaba: 240, Panamericano: 240, amt: 2400 },
  { name: 'Fev', aldeota: 300, Parangaba: 138, Panamericano: 342, amt: 2210 },
  { name: 'Mar', aldeota: 200, Parangaba: 480, Panamericano: 443, amt: 2290 },
  { name: 'Abr', aldeota: 270, Parangaba: 398, Panamericano: 342, amt: 2000 },
  { name: 'Mai', aldeota: 190, Parangaba: 480, Panamericano: 344, amt: 2181 },
  { name: 'Jun', aldeota: 230, Parangaba: 380, Panamericano: 546, amt: 2500 },
  { name: 'Jul', aldeota: 340, Parangaba: 430, Panamericano: 342, amt: 2100 },
];

const SimpleLineChart = () => {
  return (
    <div className="w-full h-full p-4">
      <LineChart
        width={450}
        height={250}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Parangaba" stroke="#d828ff" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="aldeota" stroke="#ef04e3" />
        <Line type="monotone" dataKey="Panamericano" stroke="#ef04e3" />
      </LineChart>
    </div>
  );
}

export default SimpleLineChart;
