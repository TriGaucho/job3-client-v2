import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import Routes from "./routes/Routes"
import theme from "./shared/theme/theme"


export default () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes />
        </ThemeProvider>
    )
}