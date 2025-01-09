import React from 'react';
    import { Typography, Box } from '@mui/material';

    const Footer = () => {
      return (
        <Box
          bgcolor="primary.main"
          color="white"
          p={2}
          mt={2}
          textAlign="center"
          sx={{
            position: 'relative',
            bottom: 0,
            width: '100%',
          }}
        >
          <Typography>
            CC VETERINARIA BALMASEDA - El Cubo Kalea, S/N, 48800 BALMASEDA
          </Typography>
          <Typography>
            Carmen Cabo Bravo (Col. 411) - Tel: 946 80 09 98 - Urgencias: 677 50
            27 75
          </Typography>
          <Typography>ccveterinariabalmaseda@gmail.com</Typography>
        </Box>
      );
    };

    export default Footer;
