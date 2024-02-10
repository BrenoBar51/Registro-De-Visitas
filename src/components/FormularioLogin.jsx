import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormularioLogin() {
  const [email, setEmail] = useState("");
  const [password, setSenha] = useState("");
  const navigate = useNavigate();

  function login(email, password) {
    fetch("http://localhost:8000/usuario/login", {
      method: "Post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message == "OK") {
          navigate("/teladashboard")
        }
        if (res.message == "Usuário ou senha estão incorretos") {
          navigate("/telaregistro")
        }
      });
  }

  return (
    <div className="flex justify-center">
      <div className="grid place-items-center gap-y-6 h-fit w-[80vh] border rounded-xl bg-white shadow">
        <h1 className="text-5xl font-medium pt-8">Login</h1>
        <h2 className="font-semibold pr-[22rem]">Email</h2>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text" className="w-full px-10 py-3
        text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500
          rounded-lg focus:outline-none"
        />
        <h2 className="font-semibold pr-[22rem]">Senha</h2>
        <input
          onChange={(e) => {
            setSenha(e.target.value);
          }}
          type="password" className="w-full px-10 py-3
          text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500
           rounded-lg focus:outline-none"
        />
        <button
          onClick={() => {
            login(email, password);
          }}
          className="inline-block  relative top-7 w-full px-8 py-4 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow"
        >
          Entrar
        </button>
        <button
          onClick={() => {
            login(email, password);
          }}
          className="inline-block relative top-7 w-full px-8 py-4 leading-none text-white bg-red-600 hover:bg-red-700 font-semibold rounded shadow"
        >Registrar-se</button>
      </div>
    </div>
  );
}
