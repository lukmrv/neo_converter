import { createTheme, ThemeOptions } from '@mui/material';

declare module '@mui/material' {
  interface CustomThemeOverrides extends ThemeOptions {
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
  }
}

export const theme = createTheme({
  // colors
  palette: {
    primary: {
      light: '#6abf69',
      main: '#388e3c',
      dark: '#00600f',
      contrastText: '#f5f5f5',
    },
    secondary: {
      light: '#efefef',
      main: '#bdbdbd',
      dark: '#8d8d8d',
      contrastText: '#212121',
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
  // borders
  shape: {
    borderRadius: 8,
  },
});
