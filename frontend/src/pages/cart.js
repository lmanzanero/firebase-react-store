import React, { useState, useRef, Fragment, useEffect, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { graphql, StaticQuery } from "gatsby"
import { navigate } from "gatsby"
import Layout from '../components/layouts/layout'
import CartProduct from '../components/cart/CartProduct';  
import { CartContext } from '../services/context/CartContext';

export default function Cart({ data, location, props }) {   
  const total = []; 
  const {products, addProduct} = useContext(CartContext);
  const [totalSum, settotalSum] = useState(total);
  const initalState = {
    productId: [...products],
    referenceNumber: '',
    name: '',
    phone: '',
    promocode: ''
  }
  const [orderDetails, setOrderDetails] = useState(initalState);
  const [isLoading, setLoading ] = useState(false);
  const [error, setError ] = useState({});
  const [ canSubmit,  setCanSubmit ] = useState(true);
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef();

  useEffect(() => { 
      //todo: Expand on this validation with phone verfication
     if(orderDetails.name === '' || orderDetails.phone === '' || orderDetails.phone?.length < 7 || orderDetails.phone.length > 7) {
       setCanSubmit(true);
     } else {
       setCanSubmit(false); 
     }  
  }, [orderDetails, products])

  useEffect(() => {
    //adds all values for final price
    settotalSum(total.reduce((a, b) => a + b, 0));
  }, []);

  //gets all price values froms static query
  const addAllPrices = async (price) => {
    const value = price.replace(/\$/g, '');  
    total.push(Number(value)); 
  }

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
  return await fetch(`https://us-central1-nancy-s-jewerly.cloudfunctions.net/api/order`, requestOptions)
        .then(response => {
          if(response.status == 401) {
            setOpen(true);
          }
          response.json()
        })
        .then(data => { 
          if(data.error) { 
            setError(data.error)
          } else { 
            navigate(`/view-order`,
            { state: {
              referenceCode : data.referenceCode
            }
          });
          }
        })
        .finally(() => setLoading(false))
        .catch(error => { 
          setError(error.message);
        });
    }

    const handleChange = (e) => { 
      //spread value to keys 
      setOrderDetails({...orderDetails, [e.target.name]: e.target.value}) 
  }


  return (
    <Layout>
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            static
            className="fixed z-10 inset-0 overflow-y-auto max-w"
            initialFocus={cancelButtonRef}
            open={open}
            onClose={setOpen}
          >
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle md:max-w-lg sm:w-full">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"> 
                      <div className="mt-3 text-center sm:mt-0  sm:text-left">
                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                          Verify Phone Number to create order
                        </Dialog.Title> 
                        <br/> 
                      </div> 
                      <input type="text" class="relative outline-none rounded py-4 px-3 w-full bg-white shadow text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline" placeholder="Enter **** code"/>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Verify
                    </button>
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
         <div class="container mx-auto mt-10">
            <div class="flex shadow-md my-10">
              <div class="w-3/4 bg-gray-50 px-10 py-10">
                <div class="flex justify-between border-b pb-8">
                  <h1 class="font-semibold text-2xl">Shopping Cart</h1>
                  <h2 class="font-semibold text-2xl">{products?.length} Items</h2>
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
                    //if product id's are in cart items, display them in the cart
                     data.allRestApiApiProducts.edges.map((product, key) =>  { 
                       if(products.includes(product.node.id)) {  
                         //add price value to get total price value  
                        addAllPrices(product.node.price);
                        return <CartProduct data={product}/>
                       }
                    })
                  }
                ></StaticQuery>
                <a href="/shop" class="flex font-semibold text-indigo-600 text-sm mt-10">
              
                  <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
                  Continue Shopping
                </a>
              </div>

              <div id="summary" class="w-1/2 px-8 py-10 bg-gray-100">
                <div className="flex flex-row justify-between border-b" >
                  <h1 class="font-semibold text-2xl pb-8">Order Details</h1>
                  {/* <div className="flex flex-row pt-1.5">
                    <h4 className="font-semibold px-1 text-gray-500 text-1xl">Status: </h4>
                    <span class="h-6 px-3  rounded-full bg-green-100 text-green-800">
                        Paid
                    </span>
                  </div> */}
                </div>  
                <div class="py-3">
                  <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Full Name</label>
                  <input onChange={handleChange} type="name" id="name" name="name" placeholder="Name" class="p-2 text-sm w-full" required/>
                </div>
                <div class="py-3">
                  <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Phone #</label>
                  <input onChange={handleChange} type="phone" id="phone" name="phone" placeholder="+6644584" class="p-2 text-sm w-full" required/>
                </div>
                <div class="flex flex-row justify-between">
                  <div className="py-3">
                    <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo code</label>
                    <input onChange={handleChange} type="name" id="promo" name="promoCode" placeholder="YES" class="p-2 text-sm w-full"/>
                  </div>
                  {/* <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white mt-4 uppercase">Apply</button> */}
                </div>
                {/* <a href="#" class="flex font-semibold text-indigo-600 text-sm mt-5">
                    View Order
                </a> */}
                <div className="flex mt-6">
                    <label className="flex items-center">
                      <input type="checkbox" class="form-checkbox"/>
                      <span class="ml-2">I agree to the <span class="underline">terms and conditions</span></span>
                    </label>
                </div>
                <div className="flex mt-6">
                    <label className="flex items-center">
                      <input type="checkbox" class="form-checkbox"/>
                      <span class="ml-2">I agree to subscribe to recieve <span class="underline"> SMS messages </span> to get notified on orders</span>
                    </label>
                </div>
                <div class="border-t mt-8">
                  <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                    <span>Total cost</span>
                    <span>${totalSum}</span>
                  </div>
                  <button type="button" onClick={handleOrder} disabled={canSubmit} class="bg-indigo-500 font-semibold hover:bg-indigo-600 disabled:opacity-50  py-3 text-sm text-white uppercase w-full">Create Order{isLoading ? 'loading...' : ''}</button>
                </div> 
              </div>
            </div>
          </div>
    </Layout>
  )
}
 