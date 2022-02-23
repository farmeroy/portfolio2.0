import {createTheme} from '@mui/material/styles';

const icebergTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#161822',
    },
    secondary: {
      main: '#89b9c2',
    },
    background: {
      default: '#26293a',
      paper: '#161822',
    },
    text: {
      primary: '#c6c8d1',
    },
    typography: {
      fontFamily: ['Noto Sans Mono', 'monospace', 'Roboto Mono'].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': ['Noto Sans Mono'],
      },
    },
  },
  },
});

export default icebergTheme;
