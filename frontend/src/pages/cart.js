import React, { useState, useEffect } from 'react'
import { graphql, StaticQuery } from "gatsby"
import { navigate } from "gatsby"
import Layout from '../components/layouts/layout'
import CartProduct from '../components/cart/CartProduct'; 

export default function Cart({ data, location }) {   
  const productId = location.state.productId; 
  const initalState = {
    productId: productId,
    name: '',
    phone: '',
    promocode: ''
  }

  const [orderDetails, setOrderDetails] = useState(initalState);
  const [isLoading, setLoading ] = useState(false);
  const [error, setError ] = useState({});
  const [ canSubmit,  setCanSubmit ] = useState(true);

  useEffect(() => { 
      //todo: Expand on this validation with phone verfication
     if(orderDetails.name === '' || orderDetails.phone === '') {
       setCanSubmit(true);
     } else {
       setCanSubmit(false);
     } 
     console.log(orderDetails);
  }, [orderDetails])

  const handleOrder = async () => {
    setLoading(true);
    //send state values to api
    const requestOptions = {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        "productId": `${orderDetails.productId}`,
        "name": `${orderDetails.name}`,
        "phone": `${orderDetails.phone}`, 
      })
  };
    await fetch(`https://us-central1-nancy-s-jewerly.cloudfunctions.net/api/order`, requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if(data.error) { 
            setError(data.error)
          } else { 
            navigate(`/shop`);
          }
        })
        .finally(() => setLoading(false))
        .catch(error => setError(error.message));
    }

    const handleChange = (e) => { 
      //spread value to keys 
      setOrderDetails({...orderDetails, [e.target.name]: e.target.value}) 
  }


  return (
    <Layout>
         <div class="container mx-auto mt-10">
            <div class="flex shadow-md my-10">
              <div class="w-3/4 bg-gray-50 px-10 py-10">
                <div class="flex justify-between border-b pb-8">
                  <h1 class="font-semibold text-2xl">Shopping Cart</h1>
                  <h2 class="font-semibold text-2xl">3 Items</h2>
                </div>
                <div class="flex mt-10 mb-5">
                  <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product</h3>
                  <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                  <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                  <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                </div>

                <StaticQuery
                  query={graphql`
                    {
                      allRestApiApiProducts {
                        edges {
                          node {
                            name
                            category
                            date
                            description
                            id
                            price
                            slug
                            image {
                              high
                            }
                            endpointId
                          }
                        }
                      }
                    }
                  `}
                  render={data => 
                    //todo:filter all selected products
                     data.allRestApiApiProducts.edges.map((product, key) =>  { ;
                       if(product.node.endpointId === productId) {
                         console.log("Matched: ", product);
                         return <CartProduct data={product}/>
                       }
                       
                      // return product.node === productId ?  <CartProduct key={key}/> : ''
                    })
                  }
                ></StaticQuery>
                <a href="/shop" class="flex font-semibold text-indigo-600 text-sm mt-10">
              
                  <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
                  Continue Shopping
                </a>
              </div>

              <div id="summary" class="w-1/3 px-8 py-10 bg-gray-100">
                <h1 class="font-semibold text-2xl border-b pb-8">Order Details</h1>
                <div class="flex justify-between mt-10 mb-5">
                  <span class="font-semibold text-sm uppercase">Items 3</span>
                  <span class="font-semibold text-sm">590$</span>
                  <span class="px-3 inline-flex text-md leading-5 rounded-full bg-green-100 text-green-800">
                    Paid
                  </span>
                </div>
                {/* <div>
                  <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                  <select class="block p-2 text-gray-600 w-full text-sm">
                    <option>Standard shipping - $10.00</option>
                  </select>
                </div> */}
                {/* <div class="py-10">
                  <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                  <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full"/>
                </div> */}
                <div class="py-3">
                  <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Full Name</label>
                  <input onChange={handleChange} type="name" id="name" name="name" placeholder="Name" class="p-2 text-sm w-full" required/>
                </div>
                <div class="py-3">
                  <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Phone #</label>
                  <input onChange={handleChange} type="phone" id="phone" name="phone" placeholder="+6644584" class="p-2 text-sm w-full" required/>
                </div>
                <div class="py-3">
                  <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo code</label>
                  <input onChange={handleChange} type="name" id="promo" name="promoCode" placeholder="YES" class="p-2 text-sm w-full"/>
                </div>
                <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white mt-4 uppercase">Apply</button>
                <div class="border-t mt-8">
                  <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                    <span>Total cost</span>
                    <span>$600</span>
                  </div>
                  <button type="button" onClick={handleOrder} disabled={canSubmit} class="bg-indigo-500 font-semibold hover:bg-indigo-600 disabled:opacity-50  py-3 text-sm text-white uppercase w-full">Checkout {isLoading ? 'loading...' : ''}</button>
                </div>
              </div>

            </div>
          </div>
    </Layout>
  )
}
 