import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './Products.css';
import Product from '../assets/product.svg';
import Arrow from '../assets/right-click.svg';
import { Grid, Box } from '@mui/material';

const ProductCard = () => { 
  const product = {
    rating: 4.5,
    ratingCount: 4500,
    title: 'Peppermint Tea 50g',
  };

  return (
    <Box className="product-card">
      <div className="favorite-icon">
        <FavoriteBorderIcon />
      </div> 
      <img src={Product} alt={product.title} className="product-image" />
      <div className="organic-label">Organic Food</div>
      <h3 className="product-title">{product.title}</h3>
      <div className="product-rating">
        {Array.from({ length: Math.floor(product.rating) }, (_, index) => (
          <StarIcon key={index} style={{ color: 'green' }} />
        ))}
        {product.rating % 1 > 0 && <StarHalfIcon style={{ color: 'green' }} />}
        <span className="rating-count">({(product.ratingCount / 1000).toFixed(1)}k reviews)</span>
      </div>
      <div className="price-info">
        <div className="offer-price">₹199.00</div>
        <div className="original-price">₹249.00</div>
      </div>
      <div className="product-actions">
        <button className="add-to-cart-button">
          <AddShoppingCartIcon /> Add to Cart
        </button>
      </div>
    </Box>
  );
};
 
const RecentSearch = () => {
  return (
    <Box className="product-list">
      <div className="header">
        <span className="best-sellers">Recent Searches</span>
        <div className='Arrows'>
          <img src={Arrow} alt="Arrow" />
        </div>
      </div>
      <Grid container spacing={2} className="product-card-container">
        {/* Grid Items for Product Cards */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProductCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default RecentSearch; 
