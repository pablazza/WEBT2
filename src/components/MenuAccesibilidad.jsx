import React, { useState, createContext, useContext, useRef } from 'react';
import '../css/MenuAccesibilidad.css';

// Crear contexto
const FuenteContext = createContext();

export const useFontSize = () => {
    return useContext(FuenteContext);
};

const fontSizes = ['12px', '16px', '20px']; // Tamaños de fuente: pequeño, normal, grande

const MenuAccesibilidad = ({ children }) => {
    const [fontSizeIndex, setFontSizeIndex] = useState(1); // Comenzar con el tamaño normal
    const [isHighContrast, setIsHighContrast] = useState(false); // Estado para el contraste
    const [isOpen, setIsOpen] = useState(false); // Estado para el menú

    const toggleFontSize = () => {
        setFontSizeIndex((prevIndex) => (prevIndex + 1) % fontSizes.length); // Ciclo cíclico
    };

    const toggleContrast = () => {
        setIsHighContrast((prev) => !prev); // Cambiar el estado de contraste
        document.body.classList.toggle('high-contrast'); // Cambiar clase del body
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const readContent = () => {
        const content = document.body; // O un contenedor específico
        const textElements = content.querySelectorAll('h1, h2, h3, h4, p');
        const texts = Array.from(textElements).map(el => el.innerText).join(' ');
        const utterance = new SpeechSynthesisUtterance(texts);
        window.speechSynthesis.speak(utterance);
    };

    return (
        <FuenteContext.Provider value={{ fontSize: fontSizes[fontSizeIndex], toggleFontSize, toggleContrast, isHighContrast }}>
            <div style={{
                fontSize: fontSizes[fontSizeIndex], // Aplicar tamaño de fuente al contenedor principal
                transition: 'font-size 0.3s ease',
            }}>
                <div className={`menu-accesibilidad ${isOpen ? 'open' : 'closed'}`} style={{ fontSize: '16px' }}>
                    <button onClick={toggleMenu} className="menu-toggle" aria-expanded={isOpen}>
                        {isOpen ? 'Cerrar Menú' : 'Abrir Menú'}
                    </button>
                    {isOpen && (
                        <div className="menu-items">
                            <div style={{ fontStyle : 'bold'}}>Menú Accesibilidad</div>
                            <ul>
                                <li>
                                    <button onClick={toggleFontSize}>Cambiar Tamaño de Fuente</button>
                                </li>
                                <li>
                                    <button onClick={toggleContrast}>
                                        {isHighContrast ? 'Desactivar Contraste Alto' : 'Activar Contraste Alto'}
                                    </button>
                                </li>
                                <li>
                                    <button onClick={readContent}>
                                        Lector de Texto
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => { /* Acción del traductor */ }}>Traductor</button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                <div style={{
                    fontSize: fontSizes[fontSizeIndex], // Aplicar tamaño de fuente al contenido
                    transition: 'font-size 0.3s ease',
                }}>
                    {children} {/* Renderizar el contenido hijo */}
                </div>
            </div>
        </FuenteContext.Provider>
    );
};

export default MenuAccesibilidad;