import React, { useContext } from 'react';
    import { Routes, Route, Navigate } from 'react-router-dom';
    import { CssBaseline, ThemeProvider, Box } from '@mui/material';
    import { LocalizationProvider } from '@mui/x-date-pickers';
    import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
    import 'dayjs/locale/es';
    import { theme } from './theme';
    import Dashboard from './pages/Dashboard';
    import Appointments from './pages/Appointments';
    import Clients from './pages/Clients';
    import Services from './pages/Services';
    import Login from './pages/Login';
    import Register from './pages/Register';
    import Header from './components/Header';
    import Footer from './components/Footer';
    import { UserContext } from './context/UserContext';

    function App() {
      const { user } = useContext(UserContext);

      return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box display="flex" flexDirection="column" minHeight="100vh">
              <Header />
              <Box flexGrow={1}>
                <Routes>
                  <Route
                    path="/"
                    element={user ? <Navigate to="/dashboard" /> : <Login />}
                  />
                  <Route path="/register" element={<Register />} />
                  <Route
                    path="/dashboard"
                    element={user ? <Dashboard /> : <Navigate to="/" />}
                  />
                  <Route
                    path="/appointments"
                    element={user ? <Appointments /> : <Navigate to="/" />}
                  />
                  <Route
                    path="/clients"
                    element={user ? <Clients /> : <Navigate to="/" />}
                  />
                  <Route
                    path="/services"
                    element={user ? <Services /> : <Navigate to="/" />}
                  />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </Box>
              <Footer />
            </Box>
          </ThemeProvider>
        </LocalizationProvider>
      );
    }

    export default App;
