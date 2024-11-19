import React from 'react';
import SENADISimg from "../assets/senadis.png";
import '../css/Senadis.css';

const SENADIS = () => {
  return (
    <div>
      <h2>¿Qué es el SENADIS?</h2>
      <div className="image-container">
        <img src={SENADISimg} alt="¿Qué es el SENADIS?" />
      </div>
      <p>Información y fuentes sobre el SENADIS</p>
    </div>
  );
}

export default SENADIS
