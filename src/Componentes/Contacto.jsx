import './Contacto.css';

const Contacto = () => {
  return (
    <div className="contacto-container">
      <h1>Contacto</h1>
      <div className="contacto-info">
        <div className="contacto-item">
          <h2>Dirección</h2>
          <p>123 Calle Falsa, Ciudad Imaginaria, País de Nunca Jamás</p>
        </div>
        <div className="contacto-item">
          <h2>Teléfono</h2>
          <p>+1 (555) 123-4567</p>
        </div>
        <div className="contacto-item">
          <h2>Email</h2>
          <p>contacto@ejemplo.com</p>
        </div>
        <div className="contacto-item">
          <h2>Horario de Atención</h2>
          <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
          <p>Sábado: 10:00 AM - 4:00 PM</p>
          <p>Domingo: Cerrado</p>
        </div>
        <div className="contacto-item">
          <h2>Redes Sociales</h2>
          <p>Facebook: <a href="https://facebook.com/ejemplo" target="_blank" rel="noopener noreferrer">facebook.com/ejemplo</a></p>
          <p>Twitter: <a href="https://twitter.com/ejemplo" target="_blank" rel="noopener noreferrer">@ejemplo</a></p>
          <p>Instagram: <a href="https://instagram.com/ejemplo" target="_blank" rel="noopener noreferrer">@ejemplo</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contacto;