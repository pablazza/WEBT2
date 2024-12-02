import React from 'react';
import '../css/Contact.css';
import Pablo from '../assets/fotopablo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useFontSize } from '../components/MenuAccesibilidad';

const Contact = () => {
    const { fontSize, isHighContrast } = useFontSize();

    return (
        <div className={`contact-container ${isHighContrast ? 'high-contrast' : ''}`} style={{ fontSize }}>
            <h1>Contacto</h1>
            <div className="contact-info">
                <div className="contact-img">
                    <img src={Pablo} alt="Fotografía de Pablo Zúñiga" />
                </div>
                <div className="contact-data">
                    <h2>Pablo Zúñiga Naranjo</h2>
                    <h4>+56 9 4101 7848</h4>
                    <h4>pzunigan@utem.cl</h4>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/pablo-enrique-zúñiga-naranjo/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </a>
                        <a href="https://github.com/pablazza" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;