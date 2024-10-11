import { useState } from "react";
import { Drawer, List, ListItemText, Typography, Box, ListItemButton, ListItemIcon, Link, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@emotion/react";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import HomeRepairServiceRoundedIcon from '@mui/icons-material/HomeRepairServiceRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

export default () => {
    const theme = useTheme()
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    // Função para alternar a visibilidade do Drawer
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const menuItems = [
        {
            label: "Home",
            path: "/",
            icon: <HomeRoundedIcon />
        },
        {
            label: "Empresa",
            path: "/empresa",
            icon: <HomeRepairServiceRoundedIcon />
        }
    ]

    return (
        <Box>
            <IconButton sx={{
                color: '#fff',
                background: "transparent",
                '&:hover': {
                    background: "transparent",
                }
            }} onClick={toggleDrawer}>
                <MenuIcon sx={{
                    background: "transparent",
                    '&:hover': {
                        background: "transparent",
                    }
                }} />
            </IconButton>

            <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
                <Box role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
                    <Box sx={{
                        borderBottom: "1px solid #e9e9e9",
                        padding: "1rem"
                    }}>

                        <Box sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}>
                            <Typography variant="h5" sx={{
                                textAlign: "left",
                            }}>
                                Módulos
                            </Typography>
                            <IconButton sx={{
                                width: "32px",
                                height: "32px",
                                borderRadius: "50%",
                                marginLeft: "10px",
                                transition: "translate 0.3s ease-in-out",
                                '&:hover': {
                                    translate: "2px",
                                    transition: "translate 0.3s ease-in-out",
                                    background: "transparent",
                                }
                            }}>
                                <KeyboardArrowRightRoundedIcon />
                            </IconButton>
                        </Box>
                        <Typography
                            sx={{
                                textAlign: "left",
                                marginTop: "10px",
                            }}>
                            Job3
                        </Typography>
                    </Box>
                    <List sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "240px",
                        flexGrow: 1
                    }}>
                        {menuItems.map(menuItem => (
                            <Link href={menuItem.path} sx={{
                                textDecoration: "none",
                                color: "#333",
                                transition: "translate 0.3s ease-in-out",
                                '&:hover': {
                                    background: (theme) => theme.palette.primary.main,
                                    color: "#fff",
                                    transition: "translate 0.3s ease-in-out",
                                },
                                '&.MuiListItemIcon-root': {
                                    color: (theme) => theme.palette.primary.main,
                                },
                            }}>
                                <ListItemButton
                                    sx={{
                                        '&:hover': {
                                            background: (theme) => theme.palette.primary.main,
                                            color: "#fff",
                                            '& .MuiListItemIcon-root': {
                                                color: "#fff",
                                            },
                                        },
                                    }}
                                >
                                    <ListItemIcon>
                                        {menuItem.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={menuItem.label} />
                                </ListItemButton>
                            </Link>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
};
