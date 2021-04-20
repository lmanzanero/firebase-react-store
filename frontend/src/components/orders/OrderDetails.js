import React, { useState } from 'react'

export default function OrderDetails() {
  const [orderStatus, setorderStatus] = useState('pending')
  return (
    <div class="container mx-auto mt-10">
      <div class="flex shadow-md my-10">
        <div class="w-3/4 bg-gray-50 px-10 py-10">
          <div class="flex justify-between border-b pb-8">
            <h1 class="font-semibold text-2xl">Orders</h1>
            <span>Reference #: <b>DG-5001-8521-993</b></span>
            <h2 class="font-semibold text-2xl">3 Items</h2>
          </div>
          <div class="flex mt-10 mb-5">
            <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product</h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
          </div>
          <a href="/shop" class="flex font-semibold text-indigo-600 text-sm mt-10">
        
            <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
            Continue Shopping
          </a>
        </div>

        <div id="summary" class="w-1/3 px-8 py-10 bg-gray-100">
          <div className="flex flex-row justify-between border-b" >
            <h1 class="font-semibold text-2xl pb-8">Invoice</h1>
            <div className="flex flex-row pt-1.5">
              <h4 className="font-semibold px-1 text-gray-500 text-1xl">Status: </h4>
              <span class="h-6 px-3  rounded-full bg-green-100 text-green-800">
                  {orderStatus}
              </span>
            </div>
          </div>  
          <div class="flex font-semibold justify-between py-6 text-sm uppercase">
            <label>Bank Name</label>
            <span className="text-gray-500" >Belize Bank</span>
          </div>
          <div class="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Account Name</span>
            <span className="text-gray-500" >Luis Manzanero</span>
          </div> 
          <div class="flex font-semibold justify-between py-6 text-sm uppercase border-b">
            <span>Account #</span>
            <span className="text-gray-500" >Belize Bank</span>
          </div>  
          <div class="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Tax / Service Fee</span>
              <span className="text-gray-500" >$10</span>
          </div>
          <div class="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Product Cost</span>
              <span className="text-gray-500" >$1000</span>
          </div>
          <div class="border-t">
            <div class="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span className="text-gray-500" >$1010</span>
            </div>
            <button type="button" class="bg-indigo-500 font-semibold hover:bg-indigo-600 disabled:opacity-50  py-3 text-sm text-white uppercase w-full" disabled={orderStatus != 'paid' ? true : false}>Confirm Payment</button>
            <br/>
            <br/>
            <button type="button" class="bg-indigo-500 font-semibold hover:bg-indigo-600 disabled:opacity-50  py-3 text-sm text-white uppercase w-full">Cancel Order</button>
          </div>
          <br/> 
        </div>
      </div>
    </div>
  )
}
