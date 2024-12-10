import { useState } from "react";
import { Drawer, Typography, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import { MenuList } from "./MenuList";

export default () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

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
                    <MenuList />
                </Box>
            </Drawer>
        </Box>
    );
};
