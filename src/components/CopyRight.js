import React from 'react';
import './CopyRight.css';
import FacebookIcon from '../assets/facebook.svg';
import TwitterIcon from '../assets/twitter.svg';
import InstagramIcon from '../assets/instagram.svg';
import LinkedInIcon from '../assets/linkedin.svg';

const CopyRight = () => {
  return (
    <div className="footer-bottom">
      <div className="footer-text">
        2023 Teja Organics. All Rights Reserved
      </div>
      <div className="social-media-icons">
        <img src={FacebookIcon} alt="Facebook" className="social-icon" />
        <img src={TwitterIcon} alt="Twitter" className="social-icon" />
        <img src={InstagramIcon} alt="Instagram" className="social-icon" />
        <img src={LinkedInIcon} alt="LinkedIn" className="social-icon" />
      </div>
    </div>
  );
};

export default CopyRight;
