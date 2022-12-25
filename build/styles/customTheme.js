import { createTheme } from '@mui/material';
export const theme = createTheme({
    palette: {
        primary: {
            light: '#efefef',
            main: '#bdbdbd',
            dark: '#8d8d8d',
            contrastText: '#212121',
        },
        secondary: {
            light: '#6abf69',
            main: '#388e3c',
            dark: '#00600f',
            contrastText: '#f5f5f5',
        },
    },
    typography: {
        fontFamily: 'Roboto',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 500,
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 500,
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 500,
        },
        button: {
            fontSize: '0.875rem',
            fontWeight: 500,
        },
    },
    shape: {
        borderRadius: 8,
    },
});
//# sourceMappingURL=customTheme.js.map