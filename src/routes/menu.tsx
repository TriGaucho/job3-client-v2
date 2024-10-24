import Proposta from "../pages/Proposal/Index"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import NoteAltRoundedIcon from '@mui/icons-material/NoteAltRounded';
import Home from "../pages/Home";
import { MenuLayout } from "../@types/menu";

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
    }

]