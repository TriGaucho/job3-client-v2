import React from "react"
import Proposta from "../pages/Proposal/Index"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import NoteAltRoundedIcon from '@mui/icons-material/NoteAltRounded';
import Home from "../pages/Home";

export type MenuItem = {
    name: string
    route: string
    icon?: React.JSX.Element
    page: React.JSX.Element
}

export type MenuLayout = MenuItem[]

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