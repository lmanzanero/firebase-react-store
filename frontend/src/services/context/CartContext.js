import React, { createContext, useState } from 'react'
import useShoppingCart from '../hooks/useShoppingCart'

const defaultState = { 
  products: [], 
  addProduct:() => {}, 
}
export const CartContext = createContext(defaultState);

export const CartProvider = ({children}) => {
  const { products, addProduct } = useShoppingCart();  
  return (
    <CartContext.Provider value={{products, addProduct}}> 
      {children}
    </CartContext.Provider>
  );
}