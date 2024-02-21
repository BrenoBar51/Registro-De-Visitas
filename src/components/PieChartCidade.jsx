import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#D782FF", "#482b55", "#8f57aa"];

const PieChartCidade = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function listarPorCidade() {
    fetch("http://localhost:8000/visitante/contar-cidade")
      .then((res) => res.json())
      .then((visitantes) => {
        setData(visitantes);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    listarPorCidade();
  }, []);
  return (
    <div className="w-full h-full p-4">
      {isLoading ? (
        <div>Carregando...</div>
      ) : (
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
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      )}
    </div>
  );
};

export default PieChartCidade;
