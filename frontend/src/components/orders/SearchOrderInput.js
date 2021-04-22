import React, { useState, useEffect } from 'react'

export default function SearchOrderInput({ refNumber, search, isLoading }) { 
const [referenceNumber, setReferenceNumber] = useState(refNumber);

 function changeHandler (e) {
    e.preventDefault();
    setReferenceNumber(e.target.value);
  }

  async function searchWithReferenceNumber() {  
   await search(referenceNumber);
  }

  useEffect(() => { 
    console.log("is loading", isLoading)
  }, [refNumber])

  return (
    <div className="min-h-screen flex justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col">
        <div className="py-3">
          <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Enter Reference #</label>
          <input onChange={changeHandler} type="text" id="referenceNumber" name="refenceNumber" value={referenceNumber} placeholder="DG-5001-8521-993" class="p-3.5 text-sm w-full"/>
        </div>
        <button onClick={searchWithReferenceNumber} class="bg-indigo-500 hover:bg-indigo-600 px-5 py-2 text-sm text-white mt-4 uppercase">Search Order {isLoading ? "loading...": " " }</button>
      </div>
    </div>
  )
}
