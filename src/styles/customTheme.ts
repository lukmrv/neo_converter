import { createTheme, responsiveFontSizes } from '@mui/material';

export let theme = createTheme({
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
    fontFamily: 'Arial',
    fontSize: 14,
  },
  // borders
  shape: {
    borderRadius: 4,
  },
  // style overrides
  components: {
    // Name of the component
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main,
          },
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'unset',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme, {
  breakpoints: ['sm', 'md'],
  factor: 4,
});
