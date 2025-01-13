import { Box, Typography } from "@mui/material"
import { useTheme } from '@mui/material/styles'
import Logo from "../../assets/img/Job3_logo_black.svg"
import Footer from "../Footer"
import Header from "../templates/Header"

export default () => {
    const theme = useTheme()
    return (
        <>
            <Header />
            <Box sx={{
                padding: '1rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                height: 'calc(100dvh - 9rem)',
                backgroundColor: theme.palette.background.default,
            }}>
                <img
                    src={Logo}
                    alt="Logo Job3" />
                <Typography sx={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '#222',
                    textAlign: 'center',
                    padding: '2rem',
                    lineHeight: 1.5,
                    maxWidth: 600,
                    margin: '0 auto',
                }}>
                    Bem-vindo a JOB3!
                </Typography>
            </Box>
            <Footer />
        </>
    )
}
