import React from 'react'
import '../css/Contact.css';
import Pablo from '../assets/fotopablo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contacto</h2>
      <div className="contact-info">
        <div className="contact-img">
          <img src={Pablo} alt="Fotografía de Pablo Zúñiga"/>
        </div>
        <div className="contact-data">
          <h3 className="contact-name">Pablo Zúñiga Naranjo</h3>
          <h4 className="contact-phone">+56 9 4101 7848</h4>
          <h4 className="contact-mail">pzunigan@utem.cl</h4>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/pablo-enrique-z%C3%BA%C3%B1iga-naranjo/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a href="https://github.com/pablazza" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
