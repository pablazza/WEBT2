import React, { useState } from 'react';
import img1 from '../assets/onepiece.avif';
import '../css/PerceptibleDemo.css';

const PerceptibleDemo = () => {
    const [fontSize, setFontSize] = useState('16px');
    const [altTextVisible, setAltTextVisible] = useState(false);
    const [highContrast, setHighContrast] = useState(false);

    const toggleFontSize = () => {
        setFontSize((prevSize) => (prevSize === '16px' ? '20px' : '16px'));
    };

    const handleMouseOver = () => {
        setAltTextVisible(true);
    };

    const handleMouseOut = () => {
        setAltTextVisible(false);
    };

    const toggleContrast = () => {
        setHighContrast((prev) => !prev);
    };

    return (
        <div className={`Perceptible ${highContrast ? 'high-contrast' : ''}`}>
            <h2>Principio 1: Perceptible</h2>
            <p>
                El principio de "Perceptible" establece que la información y los componentes de la interfaz de usuario deben ser presentados de manera que los usuarios puedan percibirlos. Esto incluye proporcionar alternativas textuales para contenido no textual, así como asegurar que el contenido sea adaptable y que se pueda ver y oír.
            </p>
            <h3>Ejemplo Interactivo</h3>
            <p>
                A continuación, puedes interactuar con un ejemplo que muestra cómo se pueden ajustar el tamaño del texto y el contraste para mejorar la legibilidad y la accesibilidad del contenido.
            </p>
            <p style={{ fontSize }}>
                Este texto puede cambiar de tamaño. 
                <button onClick={toggleFontSize}>
                    Cambiar tamaño de texto
                </button>
            </p>

            <button onClick={toggleContrast}>
                {highContrast ? 'Restablecer Contraste' : 'Activar Alto Contraste'}
            </button>
            
            <div className="image-container">
                <img 
                    src={img1}
                    alt="One Piece - Arco de EggHead" 
                    onMouseOver={handleMouseOver} 
                    onMouseOut={handleMouseOut}
                />
                {altTextVisible && <p className="alt-text">One Piece - Arco de EggHead</p>}
            </div>
        </div>
    );
};

export default PerceptibleDemo;