import { Link, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { menuLayout } from "../../routes/menu";

export const MenuList = () => {
    return (
        <List sx={{
            display: "flex",
            flexDirection: "column",
            width: "240px",
            flexGrow: 1
        }}>
            {menuLayout.map(menuItem => (
                <Link key={menuItem.route} href={menuItem.route} sx={{
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
                        <ListItemText primary={menuItem.name} />
                    </ListItemButton>
                </Link>
            ))}
        </List>)
}
