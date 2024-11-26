import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Inclusionimg from '../assets/inclusion.jpg';
import WcagImg from '../assets/wcag.webp';
import SenadisImg from '../assets/senadis.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/Home.css';

const Home = () => {
  const sectionData = [
    { title: '¿Qué es la Inclusión?', to: '/inclusion', image: Inclusionimg },
    { title: '¿Qué es la WCAG?', to: '/wcag', image: WcagImg },
    { title: '¿Qué es el SENADIS?', to: '/senadis', image: SenadisImg },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="Home">
      <div className="Home-header">
        <h1>Bienvenido a la página de Información</h1>
        <p>Seleccione una de las opciones del menú para mayor información</p>
      </div>
      <Slider {...settings}>
        {sectionData.map((section, index) => (
          <div className="Home-section" key={index}>
            <h2>
              <Link to={section.to}>{section.title}</Link>
            </h2>
            <div className="Home-image-container">
              <img src={section.image} alt={section.title} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;