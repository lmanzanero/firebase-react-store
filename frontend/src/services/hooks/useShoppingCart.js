import { useState, useEffect } from 'react'

export default function useShoppingCart() {
  const [products, setProducts] = useState([]); 

  const addProduct = async (productId) => { 
    if(products.length === 0) {
      setProducts([...products, productId]);
    } else {
      setProducts(products => [...products, productId]); 
    }
  }

  useEffect(() => {
    console.log(products); 
  }, [products])

  return { products, addProduct }
}
