import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "../pages/Login"
import Home from "../pages/Home"
import FormProposta from "../pages/Proposal/FormProposta"
import Proposta from "../pages/Proposal/Index"

const routes = [
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/proposta",
        element: <Proposta />
    },
    {
        path: "*",
        element: <h1>Página não encontrada</h1>
    }
]
export default () => {
    const router = createBrowserRouter(routes)
    return <RouterProvider router={router} />
}