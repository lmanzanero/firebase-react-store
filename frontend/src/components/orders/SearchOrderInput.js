import React from 'react'

export default function SearchOrderInput() {
  return (
    <div className="min-h-screen flex justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col">
        <div className="py-3">
          <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Enter Reference #</label>
          <input type="text" id="referenceNumber" name="refenceNumber" placeholder="DG-5001-8521-993" class="p-3.5 text-sm w-full"/>
        </div>
        <button class="bg-indigo-500 hover:bg-indigo-600 px-5 py-2 text-sm text-white mt-4 uppercase">Search Order</button>
      </div>
    </div>
  )
}
