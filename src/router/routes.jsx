import { createBrowserRouter, useRoutes } from "react-router-dom";
import TelaLogin from "../pages/TelaLogin/TelaLogin";
import TelaRegistro from "../pages/TelaRegistro/TelaRegistro";

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
    ]);

    return router;
}