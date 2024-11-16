import React from 'react'

export type MenuItem = {
    name: string
    route: string
    icon?: React.JSX.Element
    page: React.JSX.Element
}

export type MenuLayout = MenuItem[]
