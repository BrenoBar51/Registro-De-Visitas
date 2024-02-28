import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#650094", "#0054a3", "#00a708", "#b62400", "#939600"];

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
        <PieChart width={480} height={400}>
          <Pie
            data={data}
            cx={225}
            cy={126}
            labelLine={false}
            label={(entry) => `${entry.name} (${entry.value})`}
            outerRadius={100}
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
