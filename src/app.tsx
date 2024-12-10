import { CssBaseline, ThemeProvider } from "@mui/material"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Login from "./components/pages/Login"
import NotFound from "./components/pages/NotFound"
import { menuLayout } from "./routes/menu"
import theme from "./theme/theme"
import { MenuLayout } from "./types/TMenu"

export default () => {
    const createRoutes = (menu: MenuLayout) => {
        return menu.map(item => {
            return <Route path={item.route} element={item.page} key={`${item.route}`}></Route>
        })
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />}></Route>
                    {createRoutes(menuLayout)}
                    <Route path="*" element={<Navigate to="not-found" />} />
                    <Route path="not-found" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}