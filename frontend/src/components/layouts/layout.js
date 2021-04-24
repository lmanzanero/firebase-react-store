import React from 'react'
import { CartProvider } from '../../services/context/CartContext'
import Header from '../header'

export default function Layout({ children }) {
  return (
    <div>
      <CartProvider>
        <Header/>
        {children}
      </CartProvider>
    </div>
  )
}
