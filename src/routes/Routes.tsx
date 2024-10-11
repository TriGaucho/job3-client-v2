import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "../pages/Login"
import Home from "../pages/Home"

export default () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/home",
            element: <Home />
        },
        {
            path: "*",
            element: <h1>Página não encontrada</h1>
        }
    ])
    return <RouterProvider router={router} />
}