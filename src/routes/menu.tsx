import { LocalAtmRounded } from '@mui/icons-material';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InventoryIcon from '@mui/icons-material/Inventory';
import NoteAltRoundedIcon from '@mui/icons-material/NoteAltRounded';
import Clientes from '../components/pages/Clientes';
import Home from '../components/pages/Home';
import Nfe from '../components/pages/nfe';
import Produtos from '../components/pages/Produtos';
import Proposta from '../components/pages/Proposal/Index';
import { MenuLayout } from '../types/TMenu.type';
import Pessoas from '../components/pages/Pessoas';
import GroupIcon from '@mui/icons-material/Group';
import { GENERAL_PATH } from '../Utils/constants';


export const menuLayout: MenuLayout = [
    {
        name: "Home",
        route: `${GENERAL_PATH}/`,
        page: <Home />,
        icon: <HomeRoundedIcon />,
        permission: undefined,
    },
    {
        name: "Proposta",
        route: `${GENERAL_PATH}/proposta`,
        page: <Proposta />,
        icon: <NoteAltRoundedIcon />,
        permission: 'PROPOSTAS',
    },
    {
        name: "Clientes",
        route: `${GENERAL_PATH}/clientes`,
        page: <Clientes />,
        icon: <GroupRoundedIcon />,
        permission: undefined,
    },
    {
        name: "Produtos",
        route: `${GENERAL_PATH}/produtos`,
        page: <Produtos />,
        icon: <InventoryIcon />,
        permission: undefined,
    },
    {
        name: "Notas Fiscais",
        route: `${GENERAL_PATH}/notas-fiscais`,
        page: <Nfe />,
        icon: <LocalAtmRounded />,
        permission: 'NOTAS_FISCAIS',
    },
    {
        name: "Pessoas",
        route: `${GENERAL_PATH}/pessoas`,
        page: <Pessoas />,
        icon: <GroupIcon />,
        permission: undefined
    }

]