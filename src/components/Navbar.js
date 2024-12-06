import React, { useContext, useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; 
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentitySharpIcon from '@mui/icons-material/PermIdentitySharp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../assets/img-01.svg';
import { CartFavoritesContext } from './CartContext';
import Login from '../controllers/Login'; 

const Navbar = () => {
  const { favoritesCount, cartCount } = useContext(CartFavoritesContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLogoutOption, setShowLogoutOption] = useState(false); // State for showing logout option

  const navigate = useNavigate();
  const profileRef = useRef(null); // Ref for the user profile

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleFavClick = () => {
    navigate('/favorites');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleLoginClick = () => {
    if (isLoggedIn) {
      // If logged in, toggle the logout option
      setShowLogoutOption((prev) => !prev);
    } else {
      setShowLoginModal(true);
    }
  };

  const handleLoginSuccess = (loggedInUsername) => {
    setIsLoggedIn(true);
    setUsername(loggedInUsername);
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setShowLogoutOption(false); // Hide logout option on logout
  };

  // Hide logout option when clicking outside the profile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowLogoutOption(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar-container">
      <div className="top-bar">
        <div className="contact-left"> 
          <MailOutlineIcon className="icon" />
          <span>info@tejaorganics.com</span>
        </div>
        <div className="contact-right">
          <div className="phone">
            <LocalPhoneIcon className="icon" />
            <span>+91-040-2711-8688</span>
          </div>
          <div className="phone">
            <LocalPhoneIcon className="icon" />
            <span>+91 9398 538 942</span>
          </div>
        </div>
      </div>
      <div className="header-container">
        <div className="header-top">
          <div onClick={handleLogoClick} className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div className="search-bar-container">
            <div className="categories-menu">
              <span className="categories-text">Categories</span>
              <ExpandMoreIcon className="dropdown-icon" />
            </div>
            <input 
              type="text" 
              placeholder="Search Products..." 
              className="search-bar-input" 
            />
            <SearchIcon className="search-icon" />
          </div>
          <div className="icons-section">
            <div className="favorites" onClick={handleFavClick}>
              <FavoriteBorderIcon />
              {favoritesCount > 0 && <span className="fav-icon-count">{favoritesCount}</span>}
            </div>
            <button className="cart" onClick={handleCartClick}>
              <ShoppingCartOutlinedIcon />
              {cartCount > 0 && <span className="cart-icon-count">{cartCount}</span>}
            </button>
            <div className="user-profile" ref={profileRef} onClick={handleLoginClick}>
              
              {isLoggedIn ? (
                <div className="user-logged-in">
                  <PermIdentitySharpIcon className="user-icon" />
                  <span className="username">{username}</span>
                  <ExpandMoreIcon className="dropdown-arrow" />
                  {showLogoutOption && (
                    <button className="logout-button" onClick={handleLogout}>
                      Logout
                    </button>
                  )}
                </div>
              ) : (
                <span className="login-text">
                  Login
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="divider" />
        <div className="menu-container">
          {['Herbal Teas', 'Groceries', 'Face Care', 'Hair Care', 'Body/Skin Care', 'Wellness Products', 'Herbal Powders', 'Spray Dried Powders', 'Carrier Oils', 'More'].map((item, index) => (
            <div key={index} className="menu-item">
              <span>{item}</span>
              <ExpandMoreIcon className="menu-icon" />
            </div>
          ))}
        </div>
      </div>

      {showLoginModal && <Login onLoginSuccess={handleLoginSuccess} onClose={() => setShowLoginModal(false)} />}
    </div>
  );
};

export default Navbar;
