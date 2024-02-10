import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function FormularioRegistro() {
  const [nome, setNome] = useState("");
  const [cpf, setCPF] = useState("");
  const [idade, setIdade] = useState("");
  const [profissao, setProfissao] = useState("");
  const [genero, setGenero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const navigate = useNavigate();

  function registrarVisitante(nome, cpf, idade, profissao, genero, bairro, cidade) {
    fetch("http://localhost:8000/visitante/cadastrar", {
      method: "Post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ nome, cpf, idade, profissao, genero, bairro, cidade }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message == "Visitante cadastrado com sucesso") {
          navigate("/telaconclusao")
        }
        if (res.message == "Falha ao cadastar visitante") {
          alert("Informações insuficientes")
        }
      });
  }
  return (
    <div className="flex justify-center">
      <div className="grid place-items-center h-fit w-[80vh] border rounded-xl bg-white shadow">
        <h1 className="text-4xl font-medium py-2">
          Seja Bem-Vindo(a) Visitante
        </h1>
        <form className="w-full space-y-1">
          <h2 className="font-semibold pl-[2rem]">Nome do Visitante</h2>
          <input
            onChange={(e) => {
              setNome(e.target.value)
            }}
            className="appearance-none block w-full px-10 py-2 leading-tight
                text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500
                 rounded focus:outline-none"
            type="text"
          />
          <h2 className="font-semibold pl-[2rem]">CPF</h2>
          <input
            onChange={(e) => {
              setCPF(e.target.value)
            }}
            className="appearance-none webkit-appearance resize-none block w-full px-12 py-2 leading-tight
                text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500
                 rounded focus:outline-none"
            type="text"
          />
          <h2 className="font-semibold pl-[2rem]">Profissão</h2>
          <input
            onChange={(e) => {
              setProfissao(e.target.value)
            }}
            className="appearance-none block w-full px-12 py-2 leading-tight
                text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500
                 rounded focus:outline-none"
            type="text"
          />
          <div className="grid grid-cols-1 gap-y-1">
            <h2 className="font-semibold pl-[2rem]">Gênero</h2>
            <input
              onChange={(e) => {
                setGenero(e.target.value)
              }}
              className="appearance-none block w-full px-12 py-2 leading-tight
                text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500
                 rounded focus:outline-none"
              type="text"
            />
            <h2 className="font-semibold pl-[2rem]">Idade</h2>
            <input
              onChange={(e) => {
                setIdade(e.target.value)
              }}
              className="appearance-none block w-full px-12 py-2 leading-tight
                text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500
                 rounded focus:outline-none"
              type="text"
            />
            <h2 className="font-semibold pl-[2rem]">Cidade</h2>
            <input
              onChange={(e) => {
                setCidade(e.target.value)
              }}
              className="appearance-none block w-full px-12 py-2 leading-tight
                text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500
                 rounded focus:outline-none"
              type="text" />
            <h2 className="font-semibold pl-[2rem]">Bairro</h2>
            <input
              onChange={(e) => {
                setBairro(e.target.value)
              }}
              className="appearance-none block w-full px-12 py-2 leading-tight
                text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500
                 rounded focus:outline-none"
              type="text"
            />
          </div>
          <button onClick={() => {
            registrarVisitante(nome, cpf, idade, profissao, genero, bairro, cidade)
          }} className="w-full px-8 py-3 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}