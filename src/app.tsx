import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import theme from "./shared/theme/theme"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import { menuLayout, MenuLayout } from "./routes/menu"


export default () => {
    const createRoutes = (menu: MenuLayout) => {
        return menu.map(item => {
            return <Route path={item.route} element={item.page} key={`${item.route}`}></Route>
        }
        )
    }
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />}></Route>
                    {createRoutes(menuLayout)}
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}