import { List } from "@mui/material";
import { menuLayout } from "../../routes/menu";
import { MenuItem } from "../atoms/MenuItem";

export const MenuList = () => {
    return (
        <List sx={{
            display: "flex",
            flexDirection: "column",
            width: "240px",
            flexGrow: 1
        }}>
            {menuLayout.map(menuItem => (
                <MenuItem {...menuItem} />
            ))}
        </List>)
}
