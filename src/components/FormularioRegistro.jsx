import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function FormularioRegistro() {

  const [nome, setNome] = useState("");
  const [cpf, setCPF] = useState("");
  const [idade, setIdade] = useState("");
  const [profissao, setProfissao] = useState("");
  const [genero, setGenero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const navigate = useNavigate();

  function RegistrarVisitante() {
    fetch('http://localhost:8000/visitante/cadastrar', {
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
    <div className="bg-white mx-auto px-[30px] py-[110px] shadow">
      <h1 className="text-[35px] relative left-[20px] bottom-[60px]">
        Seja bem-vindo(a) visitante
      </h1>
      <form>
        <div>
          <h2>nome do visitante</h2>
          <input
            onChange={(e) => {
              setNome(e.target.value)
            }}
            className="appearance-none block w-full px-12 py-3 leading-tight
                text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500
                 rounded focus:outline-none"
            type="text"
          />
          <h2>CPF</h2>
          <input
          onChange={(e) => {
            setCPF(e.target.value)
          }}
            className="appearance-none webkit-appearance resize-none block w-full px-12 py-3 leading-tight
                text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500
                 rounded focus:outline-none"
            type="number"
          />
          <h2>Profissão</h2>
          <input
          onChange={(e) => {
            setProfissao(e.target.value)
          }}
            className="appearance-none block w-full px-12 py-3 leading-tight
                text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500
                 rounded focus:outline-none"
            type="text"
          />
        </div>
        <div className="flex flex-row justify-between">
          <h2 className="relative">genero</h2>
          <select
            className="relative top-8 right-[51px]  text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500
                 rounded focus:outline-none w-[184px]"
          >
            <option value="Masculino">Masculino</option>
            <option value=" Feminino">Feminino</option>
            <option selected value="outros">
              outros
            </option>
          </select>
          <h2 className="relative left-[20px] top-[2px]">Idade</h2>
          <input
            className="relative top-8 right-5   text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500
                 rounded focus:outline-none"
            type="number"
          />
        </div>
        <div className="flex">
          <h2 className="relative top-9">cidade</h2>
          <select
            className="relative top-16 right-11  text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500
                 rounded focus:outline-none w-[184px]"
          >
            <option value="fortaleza">Fortaleza</option>
            <option value=" maceio">Macéio</option>
            <option selected value="Sao Paulo">
              Sao paulo
            </option>
          </select>
          <h2 className="relative top-9 left-6">bairro</h2>
          <select
            className="relative top-16 right-4  text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500
                 rounded focus:outline-none w-[184px]"
          >
            <option value="Pan Americano">Pan Americano</option>
            <option value="Democrito Rocha">Democrito Rocha</option>
            <option selected value="Aldeota">
              Aldeota
            </option>
          </select>
        </div>
        <NavLink
          to={"/telaconclusao"}
          className={({ isActive }) => (isActive ? "" : "")}
        >
          <button onChange={() => {
            cadastar( nome, cpf, idade, profissao, genero, bairro, cidade)
          }} className="inline-block  relative top-[81px] w-full px-8 py-4 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow">
            Enviar
          </button>
        </NavLink>
      </form>
    </div>
  );
}