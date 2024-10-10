import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "../pages/Login"

export default () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        }
    ])
    return <RouterProvider router={router} />
}