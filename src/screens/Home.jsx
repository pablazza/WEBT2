import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Inclusionimg from '../assets/inclusion.jpg';
import WcagImg from '../assets/wcag.webp';
import SenadisImg from '../assets/senadis.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/Home.css';
import { useFontSize } from '../components/MenuAccesibilidad';
import 'font-awesome/css/font-awesome.min.css';

const Home = () => {
    const { fontSize, isHighContrast } = useFontSize();

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
    };

    return (
        <div className={`Home ${isHighContrast ? 'high-contrast' : ''}`} style={{ fontSize }}>
            <h1>Bienvenido a la página de Información</h1>
            <p>Seleccione una de las opciones del menú para mayor información</p>
            <div className="carousel-container">
                <Slider {...settings}>
                    {sectionData.map((section, index) => (
                        <Link to={section.to} className="Home-section" key={index}>
                            <div className="Home-image-container">
                                <img src={section.image} alt={section.title} className="Home-image" />
                                <div className="Home-info">
                                    <h2>{section.title}</h2>
                                </div>
                            </div>
                        </Link>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

// Agregar iconos a los botones de navegación
const CustomPrevArrow = (props) => (
    <div className="slick-prev" onClick={props.onClick}>
        <i className="fa fa-chevron-left" aria-hidden="true"></i>
    </div>
);

const CustomNextArrow = (props) => (
    <div className="slick-next" onClick={props.onClick}>
        <i className="fa fa-chevron-right" aria-hidden="true"></i>
    </div>
);

// Agregar los iconos personalizados a las configuraciones del carrusel
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
};

export default Home;