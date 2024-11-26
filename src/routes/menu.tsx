import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import NoteAltRoundedIcon from '@mui/icons-material/NoteAltRounded';
import Home from "../pages/Home";
import { MenuLayout } from "../@types/TMenu";
import Clientes from "../pages/Clientes";
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import Proposta from '../pages/Proposal/Index';
import Produtos from '../pages/Produtos';
import InventoryIcon from '@mui/icons-material/Inventory';
import { InventoryOutlined } from '@mui/icons-material';

export const menuLayout: MenuLayout = [
    {
        name: "Home",
        route: "/home",
        page: <Home />,
        icon: <HomeRoundedIcon />

    },
    {
        name: "Proposta",
        route: "/proposta",
        page: <Proposta />,
        icon: <NoteAltRoundedIcon />
    },
    {
        name: "Clientes",
        route: "/clientes",
        page: <Clientes />,
        icon: <GroupRoundedIcon />
    },
    {
        name: "Produtos",
        route: "/produtos",
        page: <Produtos />,
        icon: <InventoryIcon />
    }

]