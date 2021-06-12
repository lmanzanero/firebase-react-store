import { useState, useEffect } from 'react'

export default function useShoppingCart() {
  const [products, setProducts] = useState([]); 

  const addProduct = async (productId) => { 
    if(products.length === 0) {
      setProducts([...products, productId]);
    } else {
      //the filter function ensures that only unique id's are stored for the cart
      setProducts(products => [...products, productId].filter((v, i, a) => a.indexOf(v) === i)); 
    }
  }

  useEffect(() => {
    console.log(products); 
  }, [products])

  return { products, addProduct }
}
