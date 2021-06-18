import { Link } from 'gatsby'
import React, { useState, useContext, useEffect } from 'react'
import { CartContext } from '../../services/context/CartContext' 

export default function Product({ data }) {  
  const {products, addProduct} = useContext(CartContext); 
  const [isDisabled, setIsDisabled ] = useState(false);
  useEffect(() => {
    console.log("Product: " ,products)
    if(products?.includes(data.id)){
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [products])
  return (
    <div class="py-3 sm:max-w-xl sm:mx-auto">
        <div class="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
          <div class="h-48 w-48 overflow-visible w-1/2">
              <img class="rounded-3xl object-cover h-48 w-48 shadow-lg" src={data.image.high}  alt=""/>
          </div>
            <div class="flex flex-col w-1/2 space-y-4">
              <div class="flex justify-between items-start">
                <h2 class="text-2xl font-bold">{data.name}</h2>
                <div class="bg-yellow-400 font-bold rounded-xl p-2">7.2</div>
              </div>
              <div>
                <div class="text-sm text-gray-400">Series</div>
                <div class="text-lg text-gray-800">2019</div>
              </div>
                <p class=" text-gray-400 max-h-40 overflow-y-hidden"> {data.description} </p>
                <div class="flex text-2xl font-bold text-a">{data.price}</div>
                <div className="flex pb-4 space-x-3 text-sm font-semibold">
                  <div className="flex-auto flex space-x-3">
                    <Link to={`/product/${data.slug}`} className="w-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-purple-50 text-purple-700">View Details</Link>
                      <button onClick={() => addProduct(data.id)} className="w-1/2 flex items-center justify-center rounded-full bg-purple-50 text-purple-700 disabled:opacity-50" type="button" disabled={isDisabled}>Add to bag</button>
                  </div> 
                </div>
            </div>
          </div>
      </div>   
    // <div className="flex flex-col bg-gray-100 overflow-hidden rounded-lg m-2">
    //     <div className="flex-none h-48 w-full relative ">
    //       <img src={data.image.high} alt="" className="absolute inset-0 w-full h-full object-cover" />
    //     </div>
    //     <div className="flex-auto pl-6">
    //       <div className="flex flex-wrap items-baseline">
    //         <h1 className="w-full flex-none font-semibold mb-2.5">
    //           {data.name}
    //         </h1>
    //         <div className="text-4xl leading-7 font-bold text-purple-600">
    //          {data.price}
    //         </div>
    //         <div className="text-sm font-medium text-gray-400 ml-3">
    //           In stock
    //         </div>
    //       </div>
    //       <div className="flex items-baseline my-8">
    //         <div className="space-x-2 flex text-sm font-medium">
    //            <p className="text-sm text-gray-500">
    //             {data.description}
    //            </p>
    //         </div> 
    //         <div className="ml-3 text-sm text-gray-500 underline">Size Guide</div>
    //         </div>
    //         <div className="flex pb-4 space-x-3 text-sm font-semibold">
    //           <div className="flex-auto flex space-x-3">
    //             <Link to={`/product/${data.slug}`} className="w-1/2 flex items-center justify-center rounded-full bg-purple-700 text-white">View Details</Link>
    //             <button onClick={() => addProduct(data.id)} className="w-1/2 flex items-center justify-center rounded-full bg-purple-50 text-purple-700 disabled:opacity-50" type="button" disabled={isDisabled}>Add to bag</button>
    //           </div>
    //           <button className="flex-none flex items-center justify-center w-9 h-9 rounded-full bg-purple-50 text-purple-700" type="button" aria-label="like" >
    //             <svg width="20" height="20" fill="currentColor">
    //               <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
    //             </svg>
    //           </button>
    //         </div>
    //       {/* <p className="text-sm text-gray-500">
    //         Free shipping on all continental US orders.
    //       </p> */}
    //     </div>
    // </div>
  )
}
