import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function FormularioLogin() {
  const navigate = useNavigate();
  const {register, handleSubmit} = useForm()

  function login(data) {
    fetch("http://localhost:8000/usuario/login", {
      method: "Post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message == "OK") {
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
    <form onSubmit={handleSubmit(login)} className="flex justify-center">
      <div className="grid place-items-center gap-y-6 w-full border rounded-xl bg-white shadow p-3">
        <h1 className="text-5xl font-medium pt-8">Login De Usuário</h1>
        <h1 className="text-2xl font-medium">Use: admin / admin</h1>
        <h2 className="font-semibold pr-[22rem]">Email</h2>
        <input
          className="w-full px-5 py-3 text-gray-700 bg-gray-50 
          focus:bg-white border border-gray-200 focus:border-gray-500 
          rounded-lg focus:outline-none"
          type={"text"}
          {...register("email", {required:true})}
           />
        <h2 className="font-semibold pr-[22rem]">Senha</h2>
        <input
          className="w-full px-5 py-3 text-gray-700 bg-gray-50 
          focus:bg-white border border-gray-200 focus:border-gray-500 
          rounded-lg focus:outline-none"
          type={"password"}
          {...register("password", {required:true})}
          />
        <button
          type="submit"
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
