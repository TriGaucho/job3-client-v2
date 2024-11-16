import { PaletteOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface IPalette {
        primary: {
            main: string;
        };
    }

    interface IPaletteOptions {
        primary?: {
            main?: string;
        };
    }

    interface ITheme {
        palette: Palette;
    }

    interface IThemeOptions {
        palette?: PaletteOptions;
    }
}