import React from 'react';
import WCAGimg from "../assets/wcag.webp";
import '../css/Wcag.css';
import PerceptibleDemo from '../components/PerceptibleDemo';
import OperableDemo from '../components/OperableDemo';
import ComprensibleDemo from '../components/ComprensibleDemo';
import RobustoDemo from '../components/RobustoDemo';
import { useFontSize } from '../components/MenuAccesibilidad';

const WCAG = () => {
    const { fontSize, isHighContrast } = useFontSize();

    return (
        <div className={`Wcag ${isHighContrast ? 'high-contrast' : ''}`} style={{ fontSize }}>
            <h1>¿Qué es la WCAG?</h1>
            <div className="image-container">
                <img src={WCAGimg} alt="¿Qué es la WCAG?" />
            </div>
            <p>
                La WCAG (Pautas de Accesibilidad para el Contenido Web) es un conjunto de recomendaciones desarrolladas por el W3C para hacer el contenido web más accesible.
            </p>
            <p>Los principales beneficios de una web accesible son...</p>
            <a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener noreferrer">Visitar WCAG</a>

            <h2>Demostraciones de Accesibilidad</h2>
            <PerceptibleDemo />
            <OperableDemo />
            <ComprensibleDemo />
            <RobustoDemo />
        </div>
    );
};

export default WCAG;