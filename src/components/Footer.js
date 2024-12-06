import React from 'react';
import { Grid } from '@mui/material';
import './Footer.css'; 
import logo from '../assets/img-01.svg';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

const Footer = () => {
  return ( 
    <footer className="footer">
      <Grid container className="footer-grid">
        <Grid item xs={3} className="footer-column first-column">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className='logo-text'>Teja Organics is one of the biggest exclusive Organic Stores in India. Teja Organics is an initiative by a Special Child for independent living. Teja Organics has 5000+ Organic, Ayurvedic, Herbal Products. Teja Organics is a multi-brand store.</p>
        </Grid>

        <Grid item xs={2} className="footer-column">
          <h3>Extras</h3>
          <ul>
            <li>Brands</li>
            <li>Specials</li>
            <li>My Account</li>
            <li>History</li>
          </ul>
        </Grid>

        <Grid item xs={2} className="footer-column">
          <h3>Information</h3>
          <ul>
            <li>About us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
          </ul>
        </Grid>

        <Grid item xs={2} className="footer-column">
          <h3>Customer Service</h3>
          <ul>
            <li>Shipping Policy</li>
            <li>Refund & Cancellation</li>
            <li>Site Map</li>
            <li>Newsletter</li>
          </ul>
        </Grid>

        <Grid item xs={3} className="footer-column last-column">
        <h3>Store Information</h3>
            <div className="store-info">
                <div className="store-info-item">
                <PlaceOutlinedIcon className="icon-loc" />
                <p>G 05 Teja's Dreams Plaza, 3rd Avenue, Vayupuri, Sainikpuri, Secunderabad, Telangana 500094</p>
                </div>
                <div className="store-info-item">
                <LocalPhoneIcon className="icon" />
                <p>+91-040-2711-8688</p>
                </div>
                <div className="store-info-item">
                <LocalPhoneIcon className="icon" />
                <p>+91 9390 538 942</p>
                </div>
            </div>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
