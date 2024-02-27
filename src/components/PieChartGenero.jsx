import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const COLORS = ['#d782ff', '#ff8291', '#82ffa5'];

const PieChartGenero = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function listarPorGenero(){
    fetch('http://localhost:8000/visitante/contar-generos')
    .then(res => res.json())
    .then(visitantes => {
      setData(visitantes);
      setIsLoading(false);
    })
  }

  useEffect(() => {
    listarPorGenero()
  }, [])
  return (
    <div className="w-full h-full p-4">
      {
        isLoading ? (
          <div>Carregando...</div>
        ) : (
          <PieChart width={480} height={250}>
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
        )
      }
    </div>
  );
}

export default PieChartGenero;