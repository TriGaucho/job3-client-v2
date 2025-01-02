import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BotaoGenerico } from '../atoms/BotaoGenerico';
import Menu from '../organisms/Menu';

export default () => {
    const navigate = useNavigate();

    const [environment, setEnvironment] = useState<string>('');
    const [business, setBusiness] = useState<string>('');
    const [user, setUser] = useState<string>('');

    const handleEnvironment = () => {
        const env = import.meta.env.VITE_ENVIRONMENT || ' - ';
        if (env === 'production') {
            setEnvironment('Produção');
        } else if (env === 'homolog') {
            setEnvironment('Homologação');
        } else {
            setEnvironment('Desenvolvimento');
        }
    }

    const handleBusiness = () => {
        setBusiness('Job3')
    }

    const handleUser = () => {
        const username = localStorage.getItem('username');
        setUser('Nome de usuário');
    }

    useEffect(() => {
        handleEnvironment();
        handleBusiness();
        handleUser();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/');
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0 1rem',
                }}>
                    <IconButton
                        edge="start"
                        aria-label="menu"
                        sx={{
                            mr: 2,
                            color: '#fff',
                            width: "fit-content",
                            padding: 0,
                            '&:hover': {
                                color: '#e9e9e9',
                                transition: 'color 0.3s ease-in-out',
                                background: 'transparent',
                            }
                        }}
                    >
                        <Menu />
                    </IconButton>

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            display: { xs: 'none', md: 'block' },
                            flexGrow: 1,
                            color: '#fff',
                        }}
                    >
                        {business} - {environment}
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        gap: 2,
                        color: '#fff',
                        ml: 2,
                    }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontSize: {
                                    xs: '12px',
                                    md: '16px',
                                    lg: '20px'
                                }
                            }}>
                            {business} | {user}
                        </Typography>
                        <BotaoGenerico icon={<LoginRoundedIcon />} handle={() => handleLogout()} />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
