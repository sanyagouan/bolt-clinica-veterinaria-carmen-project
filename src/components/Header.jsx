import React from 'react';
    import { AppBar, Toolbar, Typography, Box } from '@mui/material';
    import logo from '../assets/logo.png';

    const Header = () => {
      return (
        <AppBar position="static" color="primary">
          <Toolbar>
            <img src={logo} alt="Logo de la clínica" height={50} />
            <Box ml={2}>
              <Typography variant="h6" color="white">
                CC Veterinaria Balmaseda
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      );
    };

    export default Header;
