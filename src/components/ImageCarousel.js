import React, { useState } from 'react';
import './ImageCarousel.css';

import One from '../assets/cat-1.svg';
import Two from '../assets/cat-2.svg';
import Three from '../assets/cat-3.svg';
 
import Arrow from '../assets/left-arrow.svg';
//import ClickedArrow from '../assets/right-arrow.svg';

import backgroundImage from '../assets/image-04.svg';

const ImageCarousel = () => {
  const slides = [One, Two, Three]; 
  const [currentSlide, setCurrentSlide] = useState(0);
  const [arrowState, setArrowState] = useState({ leftClicked: false, rightClicked: false });

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    setArrowState({ leftClicked: false, rightClicked: true });
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    setArrowState({ leftClicked: true, rightClicked: false });
  };

  const displayedSlides = [
    slides[(currentSlide + 0) % slides.length],
    slides[(currentSlide + 1) % slides.length],
    slides[(currentSlide + 2) % slides.length],
  ];

  return (
    <div
      className="carousel-component"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h2 className="carousel-heading">Shop by Category</h2> 
      <div className="custom-carousel">
        <div className="carousel-slide">
          <div className="carousel-arrow-left" onClick={prevSlide}>
            <img src={Arrow} alt="Left Arrow" className="arrow-left" />
          </div>
          {displayedSlides.map((img, idx) => (
            <img key={idx} src={img} alt={`Category ${currentSlide + idx + 1}`} className="carousel-image" />
          ))}
          <div className="carousel-arrow-right" onClick={nextSlide}>
            <img src={Arrow} alt="Right Arrow" className="arrow-right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
