import React, { useState, useEffect, useContext } from 'react';
import { Grid, Box, Typography, Card, CardContent, CardMedia, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartFavoritesContext } from './CartContext'; 
import useToast from './useToast'; 
import ProductImage from '../assets/product.svg'; 

const Favorites = () => {
  const { addToCart, updateFavoritesCount } = useContext(CartFavoritesContext);
  const { notify } = useToast(); 

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : new Array(8).fill(false);
  });

  const products = [
    { id: 1, title: 'Peppermint Tea 50g', price: 199, image: ProductImage },
    { id: 2, title: 'Green Tea 50g', price: 150, image: ProductImage },
    { id: 3, title: 'Black Tea 50g', price: 170, image: ProductImage },
    { id: 4, title: 'Chamomile Tea 50g', price: 210, image: ProductImage },
    { id: 5, title: 'Hibiscus Tea 50g', price: 220, image: ProductImage },
    { id: 6, title: 'Oolong Tea 50g', price: 240, image: ProductImage },
    { id: 7, title: 'Rooibos Tea 50g', price: 190, image: ProductImage },
    { id: 8, title: 'Ginger Tea 50g', price: 180, image: ProductImage },
  ];

  const favoritedProducts = products.filter((product, index) => favorites[index]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const scrollOnLoad=(()=>{
        window.scrollTo({top:0,left:0,behavior:'smooth'});
  });

  useEffect(()=>{
      scrollOnLoad();
  },[])

  const handleAddToCart = (product, index) => {
    addToCart(product);
    notify(`${product.title} added to cart!`, { type: 'success', position: "top-center" });

    toggleFavorite(index);
  };

  const removeFromFavorites = (id) => {
    const index = products.findIndex((product) => product.id === id);
    toggleFavorite(index);
    notify(`Removed from favorites!`, { type: 'warning', position: "top-center" }); 
  };

  const toggleFavorite = (index) => {
    const newFavorites = [...favorites];
    newFavorites[index] = !newFavorites[index];
    setFavorites(newFavorites);
    const newCount = newFavorites.filter(fav => fav).length;
    updateFavoritesCount(newCount);
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" component="h2" gutterBottom align='center'>
        My Favorites
      </Typography>
      {favoritedProducts.length === 0 ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
          <Typography variant="body1" align="center">
            No favorites added yet.
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {favoritedProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card sx={{ borderRadius: 2, boxShadow: 3, position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <IconButton
                  aria-label="remove from favorites"
                  sx={{ position: 'absolute', top: 10, right: 10, color: 'red' }}
                  onClick={() => removeFromFavorites(product.id)}
                >
                  <DeleteIcon />
                </IconButton>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="h3">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    ₹{product.price}.00
                  </Typography>
                </CardContent>
                <Box sx={{ padding: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => handleAddToCart(product, products.findIndex(p => p.id === product.id))}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Favorites;
