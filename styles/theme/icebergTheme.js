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
            secondary: '#89b9c2',
    },

  },

    typography: {
      fontFamily: ['NotoSansMono, monospace', ].join(','),
  },
});

export default icebergTheme;
