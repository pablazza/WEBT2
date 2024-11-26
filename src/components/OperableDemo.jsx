import React, { useState } from 'react';
import '../css/OperableDemo.css';

const OperableDemo = () => {
  const [message, setMessage] = useState('');

  const handleButtonClick = () => {
    setMessage('¡Botón activado!'); // Mensaje que se muestra al activar el botón

    // Reinicia el mensaje después de 2 segundos
    setTimeout(() => {
      setMessage('');
    }, 2000);
  };

  return (
    <div className="Operable">
      <h2>Principio 2: Operable</h2>
      <p>
        Los componentes de la interfaz de usuario y la navegación deben ser operables por teclado, permitiendo la interacción entre el usuario y la plataforma.
      </p>
      <ul>
        <li>
          <strong>Teclado accesible:</strong> Todas las funciones del sitio están disponibles a través del uso del teclado.
        </li>
        <li>
          <strong>Evitar convulsiones:</strong> El diseño de los contenidos del sitio no debe provocar convulsiones o ataques.
        </li>
        <li>
          <strong>Indicador de foco:</strong> El indicador del foco del teclado debe ser visible.
        </li>
      </ul>

      <div className="interactive-demo">
        <h3>Ejemplo Interactivo</h3>
        <button 
          onClick={handleButtonClick} 
          onKeyPress={(e) => { if (e.key === 'Enter') handleButtonClick(); }} // Permite activar el botón con la tecla Enter
          tabIndex="0" // Asegura que el botón es accesible por teclado
        >
          Haz clic o presiona Enter
        </button>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default OperableDemo;