import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormularioLogin() {
  const [email, setEmail] = useState("");
  const [password, setSenha] = useState("");
  const navigate = useNavigate()

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
        if(res.message == "OK"){
            navigate("/teladashboard")
        }
      });
  }

  return (
    <div className="bg-white mx-auto max-w-md py-20 px-20 shadow  ">
      <h1 className="text-5xl relative left-[80px] bottom-[40px]">Login</h1>
      <h2>email</h2>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="text"
        className="appearance-none block w-full px-12 py-3 leading-tight
                text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500
                 rounded focus:outline-none"
      />
      <h2>senha</h2>
      <input
        onChange={(e) => {
          setSenha(e.target.value);
        }}
        type="password"
        className="appearance-none block w-full px-14 py-3 leading-tight text-gray-700 bg-gray-50 focus:bg-white border
                   border-gray-200 focus:border-gray-500 rounded focus:outline-none"
      ></input>
      <button
        onClick={() => {
          login(email, password);
        }}
        className="inline-block  relative top-7 w-full px-8 py-4 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow"
      >
        Entrar
      </button>
      <div className="flex flex-col-reverse">  
        registrar-se
        <a href="#" className="relative top-12">
          esqueceu a senha?
        </a>
      </div>
    </div>
  );
}
