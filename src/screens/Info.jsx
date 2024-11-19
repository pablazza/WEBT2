import React from 'react';
import '../css/Info.css';
import ReactLogo from '../assets/logo.svg';

const Info = () => {
  return (
    <div className="info-container">
      <h2 className="info-title">Sobre este sitio</h2>
      <div className="info-content">
        <p>
          Este sitio web ha sido desarrollado en un Trabajo de Título de la Universidad Tecnológica Metropolitana con la intención de servir
          como una guía para la elaboración de sitios web inclusivos y accesibles. El objetivo de este sitio es proporcionar recursos, información
          y herramientas que ayuden a nuevos desarrolladores a poder elaborar sitios que cumplan con las normas de la WCAG y aseguren que todas las
          personas sin excepción puedan navegar por estos sitios.
        </p>
      </div>
      <h3 className="tech-title">Tecnologías utilizadas</h3>
      <div className="tech-container">
        <div className="tech-item">
          <div className="img-container">
            <img src={ReactLogo} alt="Logo de React" />
          </div>
          <div className="tech-info">
            <h4 className="tech-name">React.js</h4>
            <div className="tech-description">
              React.js es una biblioteca de JavaScript de código abierto para la construcción de interfaces de usuario. Fue desarrollada por Facebook y se caracteriza por su enfoque en la creación de componentes reutilizables y eficientes, lo que facilita el desarrollo de aplicaciones web complejas y de alto rendimiento.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;