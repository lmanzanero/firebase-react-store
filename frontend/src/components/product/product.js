import { Link } from 'gatsby'
import React, { useState, useContext, useEffect } from 'react'
import { CartContext } from '../../services/context/CartContext' 

export default function Product({ data }) {  
  const {products, addProduct} = useContext(CartContext); 
  const [isDisabled, setIsDisabled ] = useState(false);
  useEffect(() => { 
    if(products?.includes(data.id)){
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [products])
  return (
    <div class="m-auto max-w-md mx-auto">
        <div class="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
          <div class="h-48 w-48 overflow-visible w-1/2">
            <h2 class="text-base pb-2 font-bold">{data.name}</h2>
            <img class="rounded-3xl object-cover h-48 w-48 shadow-lg" src={data.image.high}  alt=""/>
          </div>
            <div class="flex flex-col w-1/2 space-y-4">
              <div class="flex justify-end">
                <div class="bg-yellow-300 font-bold rounded-xl p-2">7.2</div>
              </div>
              <div>
                <div class="text-sm text-gray-400">Series</div>
                <div class="text-lg text-gray-800">2019</div>
              </div>
                <p class=" text-gray-400 max-h-40"> {data.description} </p>
                <div class="flex text-2xl font-bold text-a">{data.price}</div>
                <div className="flex pb-4 space-x-3 text-sm font-semibold">
                  <div className="flex-auto flex space-x-3">
                    <Link to={`/product/${data.slug}`} className="w-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-purple-50 text-purple-700">Details</Link>
                      <button onClick={() => addProduct(data.id)} className="w-1/2 flex items-center justify-center rounded-full bg-purple-50 text-purple-700 disabled:opacity-50" type="button" disabled={isDisabled}>Add to Cart</button>
                  </div> 
                </div>
            </div>
          </div>
      </div>   
  )
}
