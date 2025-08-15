'use client';

import { createContext, useContext, useState, useEffect } from 'react';

// Create the context
export const CartContext = createContext();

// Create the provider component
export const CartProvider = ({ children }) => {
  // Use useState to manage the cart items
  const [items, setItems] = useState([]);

  // Load cart from localStorage on the initial mount
  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) {
      setItems(JSON.parse(stored));
    }
  }, []);

  // Save cart to localStorage whenever the items state changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  // Function to add a product to the cart or update its quantity
  const addToCart = (product) => {
    // Check if the item already exists in the cart
    const existing = items.find((item) => item.id === product.id);

    if (existing) {
      // If it exists, update the quantity
      setItems(
        items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        )
      );
    } else {
      // If it's a new item, add it to the cart
      setItems([...items, { ...product, quantity: product.quantity || 1 }]);
    }
  };

  // Function to remove a product from the cart by its ID
  const removeItem = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  // Function to clear all items from the cart
  const clearCart = () => setItems([]);

  return (
    // Provide the cart state and functions to the children components
    <CartContext.Provider value={{ items, addToCart, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to easily use the cart context
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return ctx;
}
