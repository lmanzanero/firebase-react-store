import React, { useState, useEffect, useContext } from 'react'
import { graphql, StaticQuery } from "gatsby"
import { CartTabs } from '../cart/CartTabs'
import CartProduct from '../../components/cart/CartProduct'; 
import { SearchContext } from '../../services/context/SearchContext';

export default function OrderDetails() { 
  const { data } = useContext(SearchContext); 
  const total = []; 
  const serviceFee = 5;
  const [orderStatus, setorderStatus] = useState('pending')
  const [totalSum, settotalSum] = useState(total);
  const { name, productId, referenceCode, createdAt} = data.data; 
  console.log(name, productId, referenceCode);
  useEffect(() => {
    //adds all values for final price
    settotalSum(total.reduce((a, b) => a + b, 0));  
  }, [data]);

  //gets all price values froms static query
  const addAllPrices = async (price) => {
    const value = price.replace(/\$/g, '');  
    total.push(Number(value)); 
  }

  return (
    <div class="container mx-auto mt-10">
      <div class="flex shadow-md my-10">
        <div class="w-1/2 bg-gray-50 px-10 py-10">
          <div class="flex justify-between border-b pb-8">
            <h1 class="font-semibold text-2xl">Orders</h1> 
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
                       if(productId.includes(product.node.id)) {  
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

        <div id="summary" className="w-1/2 px-8 py-10 bg-gray-100">
          <div className="flex flex-row justify-between border-b" >
            <h1 className="font-semibold text-2xl pb-8">Order Details</h1> 
          </div>  
          <div class="flex font-semibold justify-between py-4 text-sm uppercase">
            <label>Order Date</label>
            <span className="text-gray-500" >{new Date(createdAt).toLocaleDateString('')}</span>
          </div>
          <div className="flex font-semibold justify-between py-4 text-sm uppercase">
            <span>Reference #</span>
            <span className="text-gray-500" >{referenceCode}</span>
          </div> 
          <div className="flex font-semibold justify-between py-4 text-sm uppercase border-b">
            <span>Order Status</span>
            <span className="h-7 px-3 py-1 rounded-full bg-green-100 text-green-800">
                  {orderStatus}
            </span>
          </div>  
          <div className="flex font-semibold justify-between py-4 text-sm uppercase">
              <span>Tax / Service Fee</span>
              <span className="text-gray-500" >${serviceFee}</span>
          </div>
          <div className="flex font-semibold justify-between py-4 text-sm uppercase">
              <span>Product(s) Cost</span>
              <span className="text-gray-500" >${totalSum}</span>
          </div>
          <div className="border-t">
            <div className="flex font-semibold justify-between py-6 text-m uppercase">
              <span>Total cost</span>
              <span className="text-gray-500" >${totalSum + serviceFee}</span>
            </div>
            <CartTabs data={data} color="blue"/>
            {/* <button type="button" class="bg-indigo-500 font-semibold hover:bg-indigo-600 disabled:opacity-50  py-3 text-sm text-white uppercase w-full" disabled={orderStatus != 'paid' ? true : false}>Confirm Payment</button>
            <br/>
            <br/>
            <button type="button" class="bg-indigo-500 font-semibold hover:bg-indigo-600 disabled:opacity-50  py-3 text-sm text-white uppercase w-full">Cancel Order</button> */}
          </div>
          <br/> 
        </div>
      </div>
    </div>
  )
}
