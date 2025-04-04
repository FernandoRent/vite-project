import { useState, useEffect } from 'react';
import './DashBoard.css';

const DashBoard = () => {
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    const nextMatchDate = new Date('2025-03-01T20:00:00'); 
    const interval = setInterval(() => {
      const now = new Date();
      const timeDiff = nextMatchDate - now;

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="reloj-card">
        <h2>Reloj Actual</h2>
        <p>{new Date().toLocaleTimeString()}</p>
      </div>
      <div className="reloj-card">
        <h2>Tiempo hasta el próximo partido del FC Barcelona</h2>
        <p>{timeRemaining}</p>
      </div>
    </div>
  );
};

export default DashBoard;