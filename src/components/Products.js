import React, { useContext, useState, useEffect } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './Products.css';
import ProductImage from '../assets/product.svg';
import Arrow from '../assets/right-click.svg';
import { Grid, Box } from '@mui/material';
import { CartFavoritesContext } from './CartContext'; 

const Products = () => {
  const { cartItems, addToCart, updateFavoritesCount,removeFromCart } = useContext(CartFavoritesContext);
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : new Array(8).fill(false);
  });
  const [cartQuantities, setCartQuantities] = useState(Array(8).fill(0));

  const products = [ 
    { id: 1, title: 'Peppermint Tea 50g', price: 199, rating: 4.5, ratingCount: 4500,image:ProductImage},
    { id: 2, title: 'Green Tea 50g', price: 150, rating: 4.0, ratingCount: 3000,image:ProductImage },
    { id: 3, title: 'Black Tea 50g', price: 170, rating: 4.2, ratingCount: 2500,image:ProductImage },
    { id: 4, title: 'Chamomile Tea 50g', price: 210, rating: 4.7, ratingCount: 3200,image:ProductImage },
    { id: 5, title: 'Hibiscus Tea 50g', price: 220, rating: 4.8, ratingCount: 4800 ,image:ProductImage},
    { id: 6, title: 'Oolong Tea 50g', price: 240, rating: 4.1, ratingCount: 2000 ,image:ProductImage},
    { id: 7, title: 'Rooibos Tea 50g', price: 190, rating: 4.3, ratingCount: 3700 ,image:ProductImage},
    { id: 8, title: 'Ginger Tea 50g', price: 180, rating: 4.4, ratingCount: 4100 ,image:ProductImage},
  ];

 
  useEffect(() => {
    const updatedQuantities = products.map((product) => {
      const cartItem = cartItems.find(item => item.id === product.id);
      return cartItem ? cartItem.quantity : 0;
    });
    setCartQuantities(updatedQuantities);
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (index) => {
    const newFavorites = [...favorites];
    newFavorites[index] = !newFavorites[index];
    setFavorites(newFavorites);
    const newCount = newFavorites.filter(fav => fav).length;
    updateFavoritesCount(newCount);
  };

  const handleAddToCart = (index) => {
    const newQuantities = [...cartQuantities];
    newQuantities[index] += 1; 
    setCartQuantities(newQuantities);
    addToCart(products[index]); 
    // const x=localStorage.getItem('favorites');
    // const favorites=x? JSON.parse(x):[];
    // const newFavorites = [...favorites];
    // newFavorites[index] = !newFavorites[index];
    // localStorage.setItem('favorites',JSON.stringify(newFavorites));
    // const newCount = newFavorites.filter(fav => fav).length;
    // updateFavoritesCount(newCount);
  };

  const handleIncreaseQuantity = (index) => {
    const newQuantities = [...cartQuantities];
    newQuantities[index] += 1;
    setCartQuantities(newQuantities);
    addToCart(products[index]);
  };

  const handleDecreaseQuantity = (index) => {
    const newQuantities = [...cartQuantities];
    
      newQuantities[index] -= 1;
      setCartQuantities(newQuantities);
      removeFromCart(products[index]);
    
  };

  return (
    <Box className="product-list">
      <div className="header">
        <span className="best-sellers">Best sellers</span> 
        <div className='Arrows'>
          <img src={Arrow} alt="Arrow" />
        </div>
      </div>
      <Grid container spacing={2} className="product-card-container">
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Box className="product-card">
            <div className="favorite-icon" onClick={() => toggleFavorite(index)}>
                {favorites[index] ? (
                  <FavoriteIcon style={{ color: 'red' }} />
                ) : (
                  <FavoriteBorderIcon style={{ color: 'gray' }} />
                )}
              </div> 
              <img src={ProductImage} alt={product.title} className="product-image" />
              <div className="organic-label">Organic Food</div>
              <h3 className="product-title">{product.title}</h3>
              <div className="product-rating">
                {Array.from({ length: Math.floor(product.rating) }, (_, idx) => (
                  <StarIcon key={idx} style={{ color: 'green' }} />
                ))}
                {product.rating % 1 > 0 && <StarHalfIcon style={{ color: 'green' }} />}
                <span className="rating-count">({(product.ratingCount / 1000).toFixed(1)}k reviews)</span>
              </div>
              <div className="price-info">
                <div className="offer-price">₹{product.price}.00</div>
                <div className="original-price">₹{product.price + 50}.00</div>
              </div>
              <div className="product-actions">
                {cartQuantities[index] === 0 ? ( 
                  <button className="add-to-cart" onClick={() => handleAddToCart(index)}>
                    <AddShoppingCartIcon />
                    Add to Cart
                  </button>
                ) : (
                  <div className="quantity-controls">
                    <button className="quantity-button" onClick={() => handleDecreaseQuantity(index)}>-</button>
                    <span className="quantity">{cartQuantities[index]}</span>
                    <button className="quantity-button" onClick={() => handleIncreaseQuantity(index)}>+</button>
                  </div>
                )}
              </div>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;  


