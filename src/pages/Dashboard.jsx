import React from 'react';
    import { Box, Typography, Grid } from '@mui/material';
    import { Link } from 'react-router-dom';
    import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
    import PeopleIcon from '@mui/icons-material/People';
    import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

    const Dashboard = () => {
      return (
        <Box m={2}>
          <Typography variant="h4" gutterBottom>
            Panel de Control
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Link to="/appointments" style={{ textDecoration: 'none' }}>
                <Box
                  p={3}
                  bgcolor="primary.main"
                  color="white"
                  borderRadius={2}
                  textAlign="center"
                >
                  <CalendarMonthIcon fontSize="large" />
                  <Typography variant="h6">Citas</Typography>
                </Box>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Link to="/clients" style={{ textDecoration: 'none' }}>
                <Box
                  p={3}
                  bgcolor="secondary.main"
                  color="white"
                  borderRadius={2}
                  textAlign="center"
                >
                  <PeopleIcon fontSize="large" />
                  <Typography variant="h6">Clientes</Typography>
                </Box>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Link to="/services" style={{ textDecoration: 'none' }}>
                <Box
                  p={3}
                  bgcolor="primary.light"
                  color="white"
                  borderRadius={2}
                  textAlign="center"
                >
                  <MedicalServicesIcon fontSize="large" />
                  <Typography variant="h6">Servicios</Typography>
                </Box>
              </Link>
            </Grid>
          </Grid>
        </Box>
      );
    };

    export default Dashboard;
