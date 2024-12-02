import React, { useState } from 'react';
import img1 from '../assets/onepiece.avif';
import '../css/PerceptibleDemo.css';
import { useFontSize } from './MenuAccesibilidad';

const PerceptibleDemo = () => {
    const { fontSize, toggleFontSize, isHighContrast } = useFontSize(); 
    const [altTextVisible, setAltTextVisible] = useState(false);

    const handleMouseOver = () => setAltTextVisible(true);
    const handleMouseOut = () => setAltTextVisible(false);

    return (
        <div className={`Perceptible ${isHighContrast ? 'high-contrast' : ''}`} style={{ fontSize }}>
            <h2>Principio 1: Perceptible</h2>
            <p>El principio de "Perceptible" establece que la información y los componentes de la interfaz de usuario deben ser presentados de manera que los usuarios puedan percibirlos.</p>
            <h3>Ejemplo Interactivo</h3>
            <p>A continuación, puedes interactuar con un ejemplo que muestra cómo se pueden ajustar el tamaño del texto y el contraste para mejorar la legibilidad y la accesibilidad del contenido.</p>
            <p style={{ fontSize }}>
                Este texto puede cambiar de tamaño. 
                <button onClick={toggleFontSize}>Cambiar tamaño de texto</button>
            </p>
            <div className="image-container">
                <img src={img1} alt="One Piece - Arco de EggHead" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
                {altTextVisible && <p className="alt-text">One Piece - Arco de EggHead</p>}
            </div>
        </div>
    );
};

export default PerceptibleDemo;