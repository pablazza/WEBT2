import React from 'react';
import SENADISimg from "../assets/senadis.png";
import '../css/Senadis.css';
import { useFontSize } from '../components/MenuAccesibilidad';

const SENADIS = () => {
    const { fontSize, isHighContrast } = useFontSize();

    return (
        <div className={`Senadis ${isHighContrast ? 'high-contrast' : ''}`} style={{ fontSize }}>
            <h1>¿Qué es el SENADIS?</h1>
            <div className="image-container">
                <img src={SENADISimg} alt="Logo del SENADIS" />
            </div>
            <p>
                El Servicio Nacional de la Discapacidad (SENADIS) es una institución encargada de promover y proteger los derechos de las personas con discapacidad en Chile.
            </p>
            <a href="https://www.senadis.gob.cl" target="_blank" rel="noopener noreferrer">Visitar SENADIS</a>
        </div>
    );
};

export default SENADIS;