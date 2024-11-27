import React, { useState, createContext, useContext } from 'react';
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
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <FuenteContext.Provider value={{ fontSize: fontSizes[fontSizeIndex], toggleFontSize, toggleContrast, isHighContrast }}>
            <div style={{
                fontSize: fontSizes[fontSizeIndex], // Aplicar tamaño de fuente al contenedor principal
                transition: 'font-size 0.3s ease',
                backgroundColor: isHighContrast ? '#000' : '#fff', // Cambiar fondo según contraste
                color: isHighContrast ? '#fff' : '#000', // Cambiar texto según contraste
            }}>
                <div className={`menu-accesibilidad ${isOpen ? 'open' : 'closed'}`} style={{ fontSize: '16px' }}> {/* Tamaño de fuente fijo para el menú */}
                    <button onClick={toggleMenu} className="menu-toggle" aria-expanded={isOpen}>
                        {isOpen ? 'Cerrar Menú' : 'Abrir Menú'}
                    </button>
                    {isOpen && (
                        <div className="menu-items">
                            <h2>Menú Accesibilidad</h2>
                            <ul>
                                <li>
                                    <button onClick={toggleFontSize}>Cambiar Tamaño de Fuente</button>
                                </li>
                                <li>
                                    <button onClick={toggleContrast}>
                                        {isHighContrast ? 'Desactivar Contraste Alto' : 'Activar Contraste Alto'}
                                    </button>
                                </li>
                                <li><button onClick>Lector de Texto</button></li>
                                <li><button onClick>Traductor</button></li>
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