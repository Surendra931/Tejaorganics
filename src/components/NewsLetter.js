import React from 'react'; 
import boatIcon from '../assets/send.svg';
import bg from '../assets/newsbg.svg'; 
import './NewsLetter.css'; 

const Newsletter = () => {
  return (
    <div className="newsletter-container" style={{backgroundImage: `url(${bg})`}}>
      <div className="newsletter-content">
        <h2 className='heading'> News Letter</h2>
        <p className='text'>Please subscribe to our newsletter for offers and other information.</p>
      </div>
      <div className="newsletter-form-container">
      <form className="newsletter-form">
        <input
          type="email"
          placeholder="Enter email to subscribe to our newsletter"
          required
        />
        <button type="submit" className="icon-button">
          <img src={boatIcon} alt="Subscribe" className="boat-icon" />
        </button>
      </form>
    </div>
    </div>
  );
};

export default Newsletter;
