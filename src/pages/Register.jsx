import React, { useState } from 'react';
    import {
      Box,
      Button,
      TextField,
      Typography,
      Snackbar,
      Alert,
    } from '@mui/material';
    import { useNavigate } from 'react-router-dom';

    const Register = () => {
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const [error, setError] = useState(false);
      const [errorMessage, setErrorMessage] = useState('');
      const navigate = useNavigate();

      const handleRegister = () => {
        // Simulación de registro
        if (password !== confirmPassword) {
          setError(true);
          setErrorMessage('Las contraseñas no coinciden');
          return;
        }

        // Aquí iría la lógica para enviar los datos a un backend real
        // y crear el usuario en la base de datos

        // Simulación de éxito
        alert(`Usuario ${username} registrado correctamente`);
        navigate('/');
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
        >
          <Typography variant="h4" gutterBottom color="primary">
            Registro de Nuevo Usuario
          </Typography>
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
            <TextField
              label="Confirmar Contraseña"
              type="password"
              variant="outlined"
              margin="normal"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleRegister}
              sx={{ mt: 2 }}
            >
              Registrarse
            </Button>
          </Box>
          <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
              {errorMessage}
            </Alert>
          </Snackbar>
        </Box>
      );
    };

    export default Register;
