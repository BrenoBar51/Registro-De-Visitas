import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarChartComponent = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function listarPorCidade() {
    fetch("http://localhost:8000/visitante")
      .then((res) => res.json())
      .then((visitantes) => {
        let mesesValue = [0,0,0,0,0,0,0,0,0,0,0,0];
        let mesesName = ['Jan', 'Fev','a','b','c','d','e','f','g','h','i','j'];
        visitantes.map((v) => {
          mesesValue.map((m, index) => {
            if((index + 1) == Number(v.visitante_data.split("T")[0].split('-')[1])){
              mesesValue[index] += 1;
            }
          })
        })
        let data = mesesName.map((m, index) => {
          return {
            name: m,
            visitas: mesesValue[index]
          }
        })
        setData(data);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    listarPorCidade();
  }, []);

  return (
    <div className="w-full h-full p-4">
      {
        isLoading ? (
          <div>Carregando</div>
        ) : (
          <BarChart width={450} height={250} data={data}>
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
