import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function FormularioRegistro() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm()

  function registrarVisitante(data) {
    fetch("http://localhost:8000/visitante/cadastrar", {
      method: "Post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message == "Visitante cadastrado com sucesso") {
          alert("Bem Vindo!")
          navigate("/telaconclusao")
        }
        else {
          alert("Informações insuficientes")
        }
      });
  }
  return (
    <div className="flex justify-center">
      <div className="grid place-items-center h-fit w-[80vh] border rounded-xl bg-white shadow">
        <h1 className="text-2xl font-medium py-1">
          Seja Bem-Vindo(a) Visitante
        </h1>
        <form onSubmit={handleSubmit(registrarVisitante)} className="w-full">
          <h2 className="font-semibold pl-[2rem]">Nome do Visitante</h2>
          <input
            className="w-full px-5 py-3 text-gray-700 bg-gray-50 
            focus:bg-white border border-gray-200 focus:border-gray-500 
            rounded-lg focus:outline-none"
            {...register("nome", { required: true })}
          />
          <h2 className="font-semibold pl-[2rem]">CPF</h2>
          <input
            className="w-full px-5 py-3 text-gray-700 bg-gray-50 
            focus:bg-white border border-gray-200 focus:border-gray-500 
            rounded-lg focus:outline-none"
            {...register("cpf", { required: true })}
          />
          <h2 className="font-semibold pl-[2rem]">Profissão</h2>
          <input
            className="w-full px-5 py-3 text-gray-700 bg-gray-50 
            focus:bg-white border border-gray-200 focus:border-gray-500 
            rounded-lg focus:outline-none"
            {...register("profissao", { required: true })}
          />
          <div className="grid grid-cols-1">
            <h2 className="font-semibold pl-[2rem]">Gênero</h2>
            <input
              className="w-full px-5 py-3 text-gray-700 bg-gray-50 
              focus:bg-white border border-gray-200 focus:border-gray-500 
              rounded-lg focus:outline-none"
              {...register("genero", { required: true })}
            />
            <h2 className="font-semibold pl-[2rem]">Idade</h2>
            <input
              className="w-full px-5 py-3 text-gray-700 bg-gray-50 
              focus:bg-white border border-gray-200 focus:border-gray-500 
              rounded-lg focus:outline-none"
              {...register("idade", { required: true })}
            />
            <h2 className="font-semibold pl-[2rem]">Cidade</h2>
            <input
              className="w-full px-5 py-3 text-gray-700 bg-gray-50 
              focus:bg-white border border-gray-200 focus:border-gray-500 
              rounded-lg focus:outline-none"
              {...register("cidade", { required: true })}
            />
            <h2 className="font-semibold pl-[2rem]">Bairro</h2>
            <input
              className="w-full px-5 py-3 text-gray-700 bg-gray-50 
              focus:bg-white border border-gray-200 focus:border-gray-500 
              rounded-lg focus:outline-none"
              {...register("bairro", { required: true })}
            />
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}