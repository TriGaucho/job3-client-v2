import { Box, Typography } from "@mui/material"
import Header from "../shared/components/Header"
import Logo from "../assets/img/Job3_logo_black.svg"
import Footer from "../shared/components/Footer"

export default () => {
    return (
        <>
            <Header />
            <Box sx={{
                padding: '1rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                height: 'calc(100vh - 64px)',
                background: '#f5f5f5',
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
