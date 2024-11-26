import React from 'react';
import WCAGimg from "../assets/wcag.webp";
import '../css/Wcag.css';
import PerceptibleDemo from '../components/PerceptibleDemo.jsx';
import OperableDemo from '../components/OperableDemo.jsx';
import ComprensibleDemo from '../components/ComprensibleDemo.jsx';
import RobustoDemo from '../components/RobustoDemo.jsx';

const WCAG = () => {
  return (
    <div className="Wcag">
      <h2>¿Qué es la WCAG?</h2>
      <div className="image-container">
        <img src={WCAGimg} alt="¿Qué es la WCAG?" />
      </div>
      <p>
        La WCAG (Pautas de Accesibilidad para el Contenido Web) es un conjunto de recomendaciones desarrolladas por el W3C (World Wide Web Consortium) para hacer el contenido web más accesible a las personas con discapacidades. Estas pautas cubren aspectos como la percepción, operabilidad, comprensión y robustez, permitiendo crear sitios web inclusivos y accesibles para todos los usuarios.
      </p>
      <p>
        Los principales beneficios de una web accesible son: posibilitar el acceso a la información para personas con discapacidad, ampliar el público y tráfico del sitio web, permitir el acceso a trámites en línea, y favorecer a usuarios con discapacidades transitorias o de la tercera edad.
      </p>
      <p>
        Estas pautas plantean diferentes niveles de exigencia (A, AA y AAA), siendo el nivel AA el recomendado por el SENADIS, consistente con los requisitos para países miembros de la OCDE.
      </p>
      <p>
        Para más información, puedes visitar el sitio oficial de la WCAG.
      </p>
      <a 
        href="https://www.w3.org/WAI/WCAG21/quickref/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="wcag-link"
      >
        Visitar WCAG
      </a>

      <PerceptibleDemo />
      <OperableDemo />
      <ComprensibleDemo />
      <RobustoDemo />
    </div>
  );
};

export default WCAG;