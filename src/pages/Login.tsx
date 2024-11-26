import { useState } from 'react';
import { TextField, Button, Box, Typography, InputAdornment } from '@mui/material';
import { AccountCircle, Business, Lock } from '@mui/icons-material';
import { useTheme } from '@emotion/react';
import Job3_logo_black from '../assets/img/Job3_logo_black.svg';
import { useNavigate } from 'react-router-dom';

export default () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event: any) => {
        event.preventDefault();

        console.log('Usuário: ', username);
        console.log('Email: ', email);
        console.log('Senha: ', password);

        navigate('/home');
    };

    const BackgroudSide = () => (
        <Box
            sx={{
                display: { xs: 'none', lg: 'grid' },
                height: '100dvh',
                // backgroundImage: 'url(https://job3.com.br/hml-job3online/@/src/assets/img/Order-Banner.jpg)', CASO QUEIRAM IMAGEM
                backgroundSize: 'cover',
                backgroundColor: (theme) => theme.palette.primary.main,
                backgroundPosition: 'center',
                width: '66.66vw',
                position: 'absolute',
                top: 0,
                right: 0,
                placeItems: 'center',
            }}
        >
            <Box sx={{
                backgroundImage: `url(${Job3_logo_black})`,
                width: '300px',
                height: '300px',
                position: 'absolute',
                backgroundSize: '300px',
                backgroundRepeat: 'no-repeat',
            }} />
        </Box>
    )

    return (
        <>
            <Box sx={{
                display: 'grid',
                placeItems: 'center',
                height: '100dvh',
                width: { sm: '100vw', lg: '33.34vw' },
                padding: { sm: '1rem' }
            }}>
                <Box sx={{
                    display: { xs: 'block', lg: 'none' },
                    backgroundImage: `url(${Job3_logo_black})`,
                    width: '200px',
                    height: '200px',
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }} />
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        maxWidth: 400,
                        margin: 'auto',
                        padding: 2,
                        boxShadow: 3,
                        borderRadius: 2,
                        backgroundColor: 'background.paper',
                    }}
                >
                    <Typography variant="h5" sx={{ mb: 2 }}>
                        Login
                    </Typography>

                    <TextField
                        label="Empresa"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        fullWidth
                        margin="normal"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Business /> {/* Ícone de empresa */}
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField
                        label="Login"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        margin="normal"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle /> {/* Ícone de login (usuário) */}
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField
                        label="Senha"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        margin="normal"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock /> {/* Ícone de senha (cadeado) */}
                                </InputAdornment>
                            ),
                        }}
                    />

                    <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, width: '50%', color: 'white' }}>
                        Entrar
                    </Button>
                    <Box>
                        <Typography sx={{ textAlign: 'center', mt: 4, fontSize: 13 }}>
                            V-APP: 2024.07.20<br />
                            ambiente: hml-service
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <BackgroudSide />
        </>
    );
}
