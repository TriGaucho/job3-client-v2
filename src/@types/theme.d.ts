import { PaletteOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        primary: {
            main: string;
        };
    }

    interface PaletteOptions {
        primary?: {
            main?: string;
        };
    }

    interface Theme {
        palette: Palette;
    }

    interface ThemeOptions {
        palette?: PaletteOptions;
    }
}