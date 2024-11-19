import React from 'react';
import WCAGimg from "../assets/wcag.webp";
import '../css/Wcag.css';

const WCAG = () => {
  return (
    <div>
      <h2>¿Qué es la WCAG?</h2>
      <div className="image-container">
        <img src={WCAGimg} alt="¿Qué es la WCAG?" />
      </div>
      <p>Información y fuentes sobre la WCAG</p>
    </div>
  )
}

export default WCAG
