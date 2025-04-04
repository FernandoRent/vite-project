import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import NavBar from "./Componentes/NavBar";
import Login from "./Componentes/Login";
import DashBoard from "./Componentes/DashBoard";
import Contacto from "./Componentes/Contacto";
import "./App.css"; // Importando el CSS

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      {isAuthenticated && <NavBar handleLogout={handleLogout} />}
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route 
          path="/login" 
          element={
            isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login setAuth={setIsAuthenticated} />
          } 
        />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <DashBoard /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/contacto"
          element={isAuthenticated ? <Contacto /> : <Navigate to="/login" replace />}
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
