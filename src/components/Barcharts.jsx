import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarChartComponent = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const listarPorCidade = () => {
    fetch("http://localhost:8000/visitante")
      .then((res) => res.json())
      .then((visitantes) => {
        const mesesValue = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        const mesesName = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

        visitantes.forEach((v) => {
          const month = v?.visitante_data?.split("T")[0]?.split('-')[1];
          if (month && !isNaN(month)) { // Verifica se month é um número válido
            mesesValue[month - 1]++; // Ajusta o índice para começar em 0
          }
        });

        const data = mesesName.map((m, index) => ({
          name: m,
          visitas: mesesValue[index],
        }));

        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados:', error);
        // Lidar com o erro, por exemplo, exibir uma mensagem de erro
      });
  };

  useEffect(() => {
    listarPorCidade();
  }, []);

  return (
    <div className="w-full max-h-fit p-4">
      {isLoading ? (
        <div>Carregando...</div>
      ) : (
        <BarChart width={480} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="visitas" fill="#ff007c" />
        </BarChart>
      )}
    </div>
  );
};

export default BarChartComponent;