import { createBrowserRouter, useRoutes } from "react-router-dom";
import TelaLogin from "../pages/TelaLogin/TelaLogin";
import TelaRegistro from "../pages/TelaRegistro/TelaRegistro";
import TelaConclusao from "../pages/TelaConclusao/Telaconclusao";
import TelaDashboard from "../pages/TelaDashboard/Teladashboard";

export const Router = () => {

    const router = useRoutes([
        {
            path: "/",
            element: <TelaLogin />,
        },
        {
            path: "/telaregistro",
            element: <TelaRegistro />,
        },
        {
            path: "/telaconclusao",
            element: <TelaConclusao />,
        },
        {
            path: "/teladashboard",
            element: <TelaDashboard />,
        },
        
    ]);

    return router;
}