import { SvgIconComponent } from "@mui/icons-material"
import { ComponentType, ReactElement } from "react"

interface IMenu {
    label: string
    path: string
    icon: ReactElement<SvgIconComponent> | null
}