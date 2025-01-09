import { createTheme } from '@mui/material/styles';

    export const theme = createTheme({
      palette: {
        primary: {
          main: '#8cb369', // Verde más cálido
        },
        secondary: {
          main: '#f4e285', // Amarillo cálido
        },
        background: {
          default: '#f4f1de', // Beige claro
        },
        text: {
          primary: '#333333', // Gris oscuro
        },
      },
      typography: {
        fontFamily: 'Roboto, sans-serif',
        h1: {
          fontWeight: 'bold',
        },
        h2: {
          fontWeight: 'bold',
        },
        h3: {
          fontWeight: 'bold',
        },
        h4: {
          fontWeight: 'bold',
        },
        h5: {
          fontWeight: 'bold',
        },
        h6: {
          fontWeight: 'bold',
        },
        body1: {
          fontWeight: 'regular',
        },
        body2: {
          fontWeight: 'regular',
        },
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: 8,
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 8,
            },
          },
        },
      },
    });
