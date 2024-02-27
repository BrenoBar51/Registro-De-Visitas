import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Inputs";

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
          console.log("bala");
          navigate("/teladashboard");
        }
        if (res.message == "Usuário ou senha estão incorretos") {
          alert("Usuário ou senha estão incorretos!");
        }
        console.log(res);
      });
  }
  function registro() {
    navigate("/telaregistro");
  }
  return (
    <form className="flex justify-center">
      <div className="grid place-items-center gap-y-6 w-full border rounded-xl bg-white shadow p-3">
        <h1 className="text-5xl font-medium pt-8">Login De Usuário</h1>
        <h2 className="font-semibold pr-[22rem]">Email</h2>
        <Input
          type={"text"}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }} />
        <h2 className="font-semibold pr-[22rem]">Senha</h2>
        <Input
          type={"password"}
          value={password}
          onChange={(e) => {
            setSenha(e.target.value);
          }} />
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
            registro();
          }}
          className="inline-block relative mt-4 w-full px-8 py-4 leading-none text-white bg-red-600 hover:bg-red-700 font-semibold rounded shadow"
        >Registrar-se</button>
      </div>
    </form>
  );
}
