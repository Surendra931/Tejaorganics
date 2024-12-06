import React, { useContext, useState } from 'react';
import { CartFavoritesContext } from './CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid, Box, Typography, Button } from '@mui/material';
import './Cart.css';
import useToast from './useToast';


const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartFavoritesContext); 
  const [cartQuantities, setCartQuantities] = useState(cartItems.map(item => item.quantity));
  const { notify } = useToast(); 

  const handleIncreaseQuantity = (index) => {
    const newQuantities = [...cartQuantities];
    newQuantities[index] += 1;
    setCartQuantities(newQuantities);
    addToCart(cartItems[index]);
    
    
  };



  const handleDecreaseQuantity = (index) => {
    const newQuantities = [...cartQuantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
      setCartQuantities(newQuantities);
      removeFromCart(cartItems[index]);
    }
  };

  const handleRemoveFromCart = (item) => {
    removeFromCart(item,true);
    notify(`${item.title} removed from cart!`, { 
      position: "top-center",  
  }); 
};


  const totalPrice = cartItems.reduce((total, item, index) => total + item.price * cartQuantities[index], 0);

  return (
    <div className="cart-container">
      <Typography variant="h5" gutterBottom>Your Shopping Cart</Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body2">Your cart is empty. Start adding items!</Typography>
      ) : (
        <>
          <Grid container spacing={2}>
            {cartItems.map((item, index) => (
              <Grid item xs={12} key={index}>
                <Box className="cart-item" display="flex" alignItems="center" justifyContent="space-between">
                  <Box display="flex" alignItems="center">
                    <img src={item.image} alt={item.title} className="cart-item-image" />
                    <Box ml={2}>
                      <Typography variant="subtitle1">{item.title}</Typography>
                      <Typography variant="caption">Price per unit: ₹{item.price}.00</Typography>
                    </Box>
                  </Box>
                  <Box className="quantity-controls">
                    <button className="quantity-button" onClick={() => handleDecreaseQuantity(index)}>-</button>
                    <span className="quantity">{cartQuantities[index]}</span>
                    <button className="quantity-button" onClick={() => handleIncreaseQuantity(index)}>+</button>
                  </Box>
                  <Typography variant="body2" className="item-subtotal">₹{item.price * cartQuantities[index]}.00</Typography>
                  <Button color="error" size="medium" onClick={() => handleRemoveFromCart(item, true)}>
                    <DeleteIcon />
                  </Button>
                  
                </Box>
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={2} className="cart-summary">
            <Grid item xs={12}>
              <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="20px">
                <Typography variant="h6">Total Price:</Typography>
                <Typography variant="h6">₹{totalPrice}.00</Typography>
              </Box>
              <Box display="flex" justifyContent="flex-end" marginTop="20px">
                <Button variant="contained" color="primary" size="medium">
                  Proceed to Checkout
                </Button>
              </Box>
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
};

export default Cart;
