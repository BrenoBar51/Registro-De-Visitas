import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Inputs";

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
        <form className="w-full">
          <h2 className="font-semibold pl-[2rem]">Nome do Visitante</h2>
          <Input
            onChange={(e) => {
              setNome(e.target.value);
            }}
          />
          <h2 className="font-semibold pl-[2rem]">CPF</h2>
          <Input
            onChange={(e) => {
              setCPF(e.target.value);
            }}
          />
          <h2 className="font-semibold pl-[2rem]">Profissão</h2>
          <Input
            onChange={(e) => {
              setProfissao(e.target.value);
            }}
          />
          <div className="grid grid-cols-1">
            <h2 className="font-semibold pl-[2rem]">Gênero</h2>
            <Input
              onChange={(e) => {
                setGenero(e.target.value);
              }}
            />
            <h2 className="font-semibold pl-[2rem]">Idade</h2>
            <Input
              onChange={(e) => {
                setIdade(e.target.value);
              }}
            />
            <h2 className="font-semibold pl-[2rem]">Cidade</h2>
            <Input
              onChange={(e) => {
                setCidade(e.target.value);
              }}
            />
            <h2 className="font-semibold pl-[2rem]">Bairro</h2>
            <Input
              onChange={(e) => {
                setBairro(e.target.value);
              }}
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