import React from 'react';
import './Slider.css'; 
import backGroundImg from '../assets/img-03.svg'; 
import containerImg from '../assets/img-02.svg';

const Slider = () => {
  return (
    <div className="slider-container">
      <div className='bg' style={{ backgroundImage: `url(${backGroundImg})` }}>
        <div className="content-container">
          <div className="text-box">
            <h1 className="main-title">
              Nourish Your Body and Soul with <span className="highlight">Exquisite Herbal Tea!</span>
            </h1>
            <p className="description">
              Escape the ordinary and embark on a journey of wellness with our heavenly selection of Herbal Teas.
            </p>
          </div>
          <img 
            className="side-image" 
            src={containerImg}
            alt="Herbal Tea"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
