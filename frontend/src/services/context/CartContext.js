import React, { createContext, useState } from 'react'
import useShoppingCart from '../hooks/useShoppingCart'


export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const { products, addProduct } = useShoppingCart();  
  return (
    <CartContext.Provider value={[products, addProduct]}> 
      {children}
    </CartContext.Provider>
  );
}