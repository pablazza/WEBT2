import React, { useState } from 'react';
import '../css/RobustoDemo.css'; // Asegúrate de tener este archivo para estilos

const RobustoDemo = () => {
  const [htmlInput, setHtmlInput] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  const handleChange = (e) => {
    setHtmlInput(e.target.value);
    setValidationMessage(''); // Reinicia el mensaje de validación al cambiar el input
  };

  const validateHtml = () => {
    // Simulación de validación simple
    const isValid = /<([a-z][^>]*)>(.*?)<\/\1>/i.test(htmlInput);
    setValidationMessage(isValid ? 'El HTML es válido.' : 'Error: El HTML no es válido. Por favor, revisa las etiquetas.');
  };

  return (
    <div className="Robusto">
      <h2>Principio 4: Robusto</h2>
      <p>
        El contenido debe ser fiable y consistente para permitir su uso y navegación a través de una amplia variedad de aplicaciones de usuario y ayudas técnicas.
      </p>
      <ul>
        <li>
          <strong>Errores de sintaxis:</strong> El sitio web no debe contener errores de sintaxis en HTML/XHTML. Se recomienda el uso de herramientas de validación.
        </li>
        <li>
          <strong>Uso de hojas de estilo:</strong> Utiliza hojas de estilo en cascada (CSS) para la presentación de contenidos.
        </li>
        <li>
          <strong>Navegación en múltiples navegadores:</strong> Asegúrate de que el sitio sea navegable en varios navegadores.
        </li>
      </ul>

      <div className="html-validator">
        <h3>Ejemplo de Validador de HTML</h3>
        <textarea
          rows="4"
          placeholder="Introduce tu código HTML aquí..."
          value={htmlInput}
          onChange={handleChange}
        />
        <button onClick={validateHtml}>Validar HTML</button>
        {validationMessage && <p className="validation-message">{validationMessage}</p>}
      </div>
    </div>
  );
};

export default RobustoDemo;