import React from 'react';
import '../css/Info.css';
import ReactLogo from '../assets/logo.svg';
import { useFontSize } from '../components/MenuAccesibilidad';

const Info = () => {
    const { fontSize, isHighContrast } = useFontSize();

    return (
        <div className={`info-container ${isHighContrast ? 'high-contrast' : ''}`} style={{ fontSize }}>
            <h1 className="info-title">Sobre este sitio</h1>
            <p className="info-content">
                Este sitio web ha sido desarrollado en un Trabajo de Título de la Universidad Tecnológica Metropolitana con la intención de servir como una guía para la elaboración de sitios web inclusivos y accesibles.
            </p>
            <h3 className="tech-title">Tecnologías utilizadas</h3>
            <div className="tech-container">
                <div className="tech-item">
                    <div className="img-container">
                        <img src={ReactLogo} alt="Logo de React" />
                    </div>
                    <div className="tech-info">
                        <h4 className="tech-name">React.js</h4>
                        <p className="tech-description">React.js es una biblioteca de JavaScript de código abierto para la construcción de interfaces de usuario.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;