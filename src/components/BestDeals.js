import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import './BestDeals.css';
import backgroundImage from '../assets/image-04.svg';

const BestDeals = () => {
  return (
    <div
      className="deals-bg"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Typography variant="h4" className="deals-heading">Best Deals</Typography>
      <Typography variant="h5" className='deals-text'>Free shipping for orders over ₹1500/-</Typography>

      <Grid container spacing={2} justifyContent="center" style={{ padding: '0 20px', width:'100%', margin: '0 auto' }}>
        <Grid item xs={12} sm={6} md={3}>
          <div className="card">
            <p>Save</p>
            <h2>₹ 299</h2>
            <h3>Enjoy discounts on all types of <span className="organic-text1">Organic Products</span></h3>
            <Button className="shop-now" style={{ backgroundColor: '#E8B34E', width: '100%' }}>Shop Now</Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <div className="card">
            <p>Save</p>
            <h2>₹ 299</h2>
            <h3>Enjoy discounts on all types of <span className="organic-text2">Organic Products</span></h3>
            <Button className="shop-now" style={{ backgroundColor: '#2FC3E3', width: '100%' }}>Shop Now</Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <div className="card">
            <p>Save</p>
            <h2>₹ 299</h2>
            <h3>Enjoy discounts on all types of <span className="organic-text3">Organic Products</span></h3>
            <Button className="shop-now" style={{ backgroundColor: '#EB4D34', width: '100%' }}>Shop Now</Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <div className="card">
            <p>Save</p>
            <h2>₹ 299</h2>
            <h3>Enjoy discounts on all types of <span className="organic-text4">Organic Products</span></h3>
            <Button className="shop-now" style={{ backgroundColor: '#88BD40', width: '100%' }}>Shop Now</Button>
          </div>
        </Grid>
      </Grid> 
    </div>
  );
};

export default BestDeals;
