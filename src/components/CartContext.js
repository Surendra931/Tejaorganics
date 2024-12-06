import React, { createContext, useState, useEffect } from 'react';

export const CartFavoritesContext = createContext();

export const CartFavoritesProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const savedFavorites = localStorage.getItem('favorites');
  const favoritesDetails=savedFavorites ? JSON.parse(savedFavorites) : [];
  const [favorites, setFavorites] = useState(() => {
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const [favoritesCount, setFavoritesCount] = useState(favoritesDetails.filter((fav) => fav===true).length);
  const [cartCount, setCartCount] = useState(0);

  const saveCartToLocalStorage = (items) => {
    localStorage.setItem('cartItems', JSON.stringify(items));
    localStorage.setItem('cartCount', items.reduce((count, item) => count + item.quantity, 0));
  };

  const loadCartFromLocalStorage = () => {
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      const parsedItems = JSON.parse(storedItems);
      setCartItems(parsedItems);
      const totalCount = parsedItems.reduce((count, item) => count + item.quantity, 0);
      setCartCount(totalCount);
    }
  };

  useEffect(() => {
    loadCartFromLocalStorage();
  }, []);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      let updatedItems;
      if (existingItem) {
        updatedItems = prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        updatedItems = [...prevItems, { ...product, quantity: 1 }];
      }

      saveCartToLocalStorage(updatedItems);
      return updatedItems;
    });

    setCartCount((prevCount) => prevCount + 1);
  };

  const removeFromCart = (product, removeWhole = false) => {
    let updatedItems;
    let removeCount
    const selectedItem = cartItems.find((item) => item.id === product.id);
    const remainingItems = cartItems.filter((item) => item.id !== product.id);

    if(removeWhole){
      updatedItems = remainingItems
      removeCount = selectedItem?.quantity ?? 0
    }
    else if(selectedItem){
      if(selectedItem.quantity === 1) {
        updatedItems = remainingItems
      } else {
        updatedItems = cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity -1 } : item
        )
      }
      removeCount = 1
    }
    setCartItems(updatedItems);
    setCartCount(cartCount - (removeCount ?? 0) );

    saveCartToLocalStorage(updatedItems);
  };

  const addToFavorites = (product) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.find((fav) => fav.id === product.id);
      if (!isFavorite) {
        const updatedFavorites = [...prevFavorites, product];
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        return updatedFavorites;
      }
      return prevFavorites;
    });
    setFavoritesCount((prevCount) => prevCount + 1);
  };

  const removeFromFavorites = (product) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter((fav) => fav.id !== product.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
    setFavoritesCount((prevCount) => prevCount - 1);
  };

  const updateFavoritesCount = (count) => setFavoritesCount(count);

  return (
    <CartFavoritesContext.Provider
      value={{ cartItems, cartCount, favorites, favoritesCount, addToCart, removeFromCart, addToFavorites, removeFromFavorites, updateFavoritesCount }}
    >
      {children}
    </CartFavoritesContext.Provider>
  );
};
