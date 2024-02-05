import { Link, NavLink } from "react-router-dom";

export default function FormularioLogin() {
    return (
        <div className="bg-white mx-auto max-w-md py-20 px-20 shadow  ">
            <h1 className="text-5xl relative left-[80px] bottom-[40px]">Login</h1>
            <h2>email</h2>
            <input type="text" className="appearance-none block w-full px-12 py-3 leading-tight
                text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500
                 rounded focus:outline-none"/>
            <h2>senha</h2>
            <input type="password" className="appearance-none block w-full px-14 py-3 leading-tight text-gray-700 bg-gray-50 focus:bg-white border
                   border-gray-200 focus:border-gray-500 rounded focus:outline-none"></input>
                    <NavLink to={'/teladashboard'} className={({ isActive }) => (isActive ? '' : '')}>
            <button className="inline-block  relative top-7 w-full px-8 py-4 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow">Entrar</button>
            </NavLink>
            <div className="flex flex-col-reverse">
                <NavLink to={'/telaregistro'} className={({ isActive }) => (isActive ? '' : '')}>
                   registrar-se
                </NavLink>  
                <a href="#" className="relative top-12">esqueceu a senha?</a>
            </div>
        </div>
    )
}