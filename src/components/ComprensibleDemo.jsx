import React, { useState } from 'react';
import '../css/ComprensibleDemo.css'; // Asegúrate de tener este archivo para estilos

const ComprensibleDemo = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Reinicia el error al hacer cambios
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = formData;

    // Validación simple de formulario
    if (!name || !email) {
      setError('Por favor, complete todos los campos.');
      return;
    }
    
    setSuccessMessage('Formulario enviado con éxito!');
    setFormData({ name: '', email: '' }); // Reinicia el formulario
  };

  return (
    <div className="Comprensible">
      <h2>Principio 3: Comprensible</h2>
      <p>
        La información y el manejo de la interfaz de usuario deben ser comprensibles, es decir, que puedan ser entendidos de manera fácil.
      </p>
      <ul>
        <li>
          <strong>Orden lógico de navegación:</strong> Los contenidos del sitio web deben tener un orden lógico de navegación.
        </li>
        <li>
          <strong>Atributo lang:</strong> En el código fuente, se debe identificar el idioma del sitio web mediante el atributo “lang”.
        </li>
        <li>
          <strong>Sin cambios inesperados:</strong> Al recibir el foco del teclado, no se debe iniciar ningún cambio en el contexto.
        </li>
        <li>
          <strong>Asistencia en la introducción de datos:</strong> Se debe ofrecer asistencia para evitar y corregir errores.
        </li>
      </ul>

      <div className="form-demo">
        <h3>Ejemplo de Formulario Interactivo</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
  );
};

export default ComprensibleDemo;