import { ThemeOptions } from '@mui/material';
import { Spacing } from '@mui/system';
declare module '@mui/material' {
    interface CustomThemeOverrides extends ThemeOptions {
        palette: {
            primary: {
                light: string;
                main: string;
                dark: string;
                contrastText: string;
            };
            secondary: {
                light: string;
                main: string;
                dark: string;
                contrastText: string;
            };
        };
        typography: {
            fontFamily: string;
            h1: {
                fontSize: string;
                fontWeight: number;
            };
            h2: {
                fontSize: string;
                fontWeight: number;
            };
            h3: {
                fontSize: string;
                fontWeight: number;
            };
            button: {
                fontSize: string;
                fontWeight: number;
            };
        };
        spacing: Spacing;
        shape: {
            borderRadius: number;
        };
    }
}
export declare const theme: import("@mui/material").Theme;
//# sourceMappingURL=customTheme.d.ts.map