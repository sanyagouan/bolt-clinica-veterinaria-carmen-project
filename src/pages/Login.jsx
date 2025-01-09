import React, { useState, useContext } from 'react';
    import {
      Box,
      Button,
      TextField,
      Typography,
      Snackbar,
      Alert,
      Link,
    } from '@mui/material';
    import { useNavigate, Link as RouterLink } from 'react-router-dom';
    import { UserContext } from '../context/UserContext';

    const Login = () => {
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState(false);
      const [errorMessage, setErrorMessage] = useState('');
      const navigate = useNavigate();
      const { setUser } = useContext(UserContext);

      // Simulación de base de datos de usuarios
      const registeredUsers = [
        { username: 'admin', password: 'admin' },
        // Aquí se añadirían los usuarios registrados
      ];

      const handleLogin = () => {
        const userFound = registeredUsers.find(
          (u) => u.username === username && u.password === password
        );

        if (userFound) {
          setUser(userFound);
          navigate('/dashboard');
        } else {
          setError(true);
          setErrorMessage('Credenciales inválidas');
        }
      };

      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setError(false);
      };

      return (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100vh"
          bgcolor="background.default"
          sx={{
            backgroundImage: 'url(/src/assets/login-background.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Box
            component="form"
            display="flex"
            flexDirection="column"
            width="300px"
            p={3}
            borderRadius={2}
            bgcolor="white"
            boxShadow={2}
          >
            <Typography variant="h4" gutterBottom color="primary">
              Clínica Veterinaria Balmaseda
            </Typography>
            <TextField
              label="Usuario"
              variant="outlined"
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Contraseña"
              type="password"
              variant="outlined"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogin}
              sx={{ mt: 2 }}
            >
              Iniciar Sesión
            </Button>
            <Box mt={2} textAlign="center">
              <Link component={RouterLink} to="/register">
                ¿No tienes una cuenta? Regístrate
              </Link>
            </Box>
          </Box>
          <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
              {errorMessage}
            </Alert>
          </Snackbar>
        </Box>
      );
    };

    export default Login;
