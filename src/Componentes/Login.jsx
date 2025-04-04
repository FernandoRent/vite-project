import { useState } from "react";
import { Container, TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../Componentes/Login.css"; // Importando el CSS

const Login = ({ setAuth }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (user === "admin" && password === "1234") {
      setAuth(true);
      navigate("/dashboard");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <Container maxWidth="xs" className="login-container">
      <Box className="login-box">
        <Typography variant="h5" align="center">
          Iniciar Sesión
        </Typography>
        <TextField
          label="Usuario"
          fullWidth
          margin="normal"
          onChange={(e) => setUser(e.target.value)}
        />
        <TextField
          label="Contraseña"
          type="password"
          fullWidth
          margin="normal"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
          Iniciar Sesión
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
