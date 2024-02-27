import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarChartComponent = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function listarPorBairro() {
    fetch('http://localhost:8000/visitante/contar-bairro')
      .then(res => res.json())
      .then((visitantes) => {
        let bairrosValue = [0, 0, 0, 0];
        let bairrosName = ['Centro', 'Aldeota', 'Parangaba', 'Papicu'];
        visitantes.map((v) => {
          bairrosValue.map((m, index) => {
            if((index + 1)){
              bairrosValue[index] += 1;
            }
          })
        })
        let data = bairrosName.map((b, index) => {
          return {
            name: b,
            visitas: bairrosValue[index]
          }
        })
        setData(data);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    listarPorBairro()
  }, [])

  return (
    <div className="w-full max-h-fit p-4">
      {
        isLoading ? (
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
        )
      }
    </div>
  );
}

export default BarChartComponent;