import React from 'react';
import SENADISimg from "../assets/senadis.png";
import '../css/Senadis.css';

const SENADIS = () => {
  return (
    <div className="Senadis">
      <h2>¿Qué es el SENADIS?</h2>
      <div className="image-container">
        <img src={SENADISimg} alt="Logo del SENADIS" />
      </div>
      <p>
        El Servicio Nacional de la Discapacidad (SENADIS) es una institución encargada de promover y proteger los derechos de las personas con discapacidad en Chile.
      </p>
      <p>
        Para más detalles, puedes visitar el sitio oficial de SENADIS.
      </p>
      <a href="https://www.senadis.gob.cl" target="_blank" rel="noopener noreferrer" className="senadis-link">Visitar SENADIS</a>
    </div>
  );
}

export default SENADIS;