import React, { useState, useEffect } from 'react';
import '../css/AccessibilityMenu.css';

const AccessibilityMenu = () => {
    const [fontSize, setFontSize] = useState(16);
    const [highContrast, setHighContrast] = useState(false);
    const [isVisible, setIsVisible] = useState(true); // Estado para mostrar/ocultar el menú

    // Efecto para aplicar el tamaño de fuente y el contraste al documento
    useEffect(() => {
        document.body.style.fontSize = `${fontSize}px`;
        document.body.classList.toggle('high-contrast', highContrast); // Aplica la clase de alto contraste al cuerpo
    }, [fontSize, highContrast]);

    const increaseFontSize = () => {
        setFontSize(prevSize => Math.min(prevSize + 2, 32)); // Limitar el tamaño máximo
    };

    const decreaseFontSize = () => {
        setFontSize(prevSize => Math.max(prevSize - 2, 10)); // Limitar el tamaño mínimo
    };

    const toggleContrast = () => {
        setHighContrast(prevContrast => !prevContrast);
    };

    const toggleMenuVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className={`accessibility-menu ${isVisible ? '' : 'hidden'}`}>
            <h2>Menú de Accesibilidad</h2>
            <button onClick={increaseFontSize}>Aumentar Fuente</button>
            <button onClick={decreaseFontSize}>Disminuir Fuente</button>
            <button onClick={toggleContrast}>Modo Alto Contraste</button>
            <button onClick={toggleMenuVisibility}>{isVisible ? 'Ocultar' : 'Mostrar'} Menú</button>
        </div>
    );
};

export default AccessibilityMenu;