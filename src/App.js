import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import OfferDetails from "./components/OfferDetails";
import Products from "./components/Products";
import ImageCarousel from "./components/ImageCarousel"; 
import BestDeals from "./components/BestDeals";
import RecentSearch from "./components/RecentSearch";
import Testimonial from "./components/Testimonial";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import CopyRight from "./components/CopyRight";
import Cart from "./components/Cart";
import { CartFavoritesProvider } from './components/CartContext';
import Favorites from "./components/Favorites";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function App() {
  return (
    <CartFavoritesProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Slider />
              <OfferDetails />
              <ImageCarousel />
              <Products />
              <BestDeals />
              <RecentSearch /> 
              <Testimonial />
              <NewsLetter />
            </>
          } />
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/favorites" element={<Favorites />} /> 
        </Routes> 
        <Footer />
        <CopyRight />
        <ToastContainer position="top-center" autoClose={1000} hideProgressBar={true} />
      </Router>
    </CartFavoritesProvider>
  );
}
 
export default App;
