import React from 'react';
import Inclusionimg from "../assets/inclusion.jpg";
import '../css/Inclusion.css';
import { useFontSize } from '../components/MenuAccesibilidad';

const Inclusion = () => {
    const { fontSize, isHighContrast } = useFontSize();

    return (
        <div className={`Inclusion ${isHighContrast ? 'high-contrast' : ''}`} style={{ fontSize }}>
            <h1>¿Qué es la Inclusión?</h1>
            <div className="Inclusion-image-container">
                <img src={Inclusionimg} alt="¿Qué es la Inclusión?" />
            </div>
            <p>
                Inclusión es el proceso de crear entornos donde todas las personas, sin importar sus diferencias, se sienten valoradas, respetadas y pueden participar plenamente.
            </p>
            <h3>Ejemplos de Inclusión:</h3>
            <ul>
                <li>Inclusión social: Cómo integrar a grupos marginados en la sociedad.</li>
                <li>Inclusión educativa: Cómo garantizar que todos los estudiantes aprendan juntos.</li>
                <li>Inclusión laboral: Cómo crear entornos de trabajo diversos e inclusivos.</li>
                <li>Barreras a la inclusión: Los obstáculos que impiden la plena participación.</li>
            </ul>
        </div>
    );
}

export default Inclusion;