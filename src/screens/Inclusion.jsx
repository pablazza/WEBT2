import React from 'react';
import Inclusionimg from "../assets/inclusion.jpg";
import '../css/Inclusion.css';

const Inclusion = () => {
  return (
    <div className="Inclusion">
      <div className="Inclusion-header">
        <h2>¿Qué es la Inclusión?</h2>
        <div className="Inclusion-image-container">
          <img src={Inclusionimg} alt="¿Qué es la Inclusión?" />
        </div>
      </div>
      <div className="Inclusion-content">
        <p>
          Inclusión es el proceso de crear entornos donde todas las personas, sin
          importar sus diferencias, se sienten valoradas, respetadas y pueden
          participar plenamente. Es una práctica que busca eliminar barreras y
          promover la igualdad de oportunidades para todos, fomentando una
          sociedad más justa y equitativa.
        </p>
        <div className="Inclusion-examples">
          <h3>Ejemplos de Inclusión:</h3>
          <ul>
            <li>Inclusión social: Cómo integrar a grupos marginados en la sociedad.</li>
            <li>Inclusión educativa: Cómo garantizar que todos los estudiantes aprendan juntos.</li>
            <li>Inclusión laboral: Cómo crear entornos de trabajo diversos e inclusivos.</li>
            <li>Barreras a la inclusión: Los obstáculos que impiden la plena participación.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Inclusion;
