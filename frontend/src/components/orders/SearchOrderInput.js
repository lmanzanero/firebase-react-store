import React, { useState, useEffect, useContext } from 'react' 
import { SearchContext } from '../../services/context/SearchContext';

export default function SearchOrderInput({referenceCode}) { 
  const { loading, searchWithReferenceNumber, referenceNumber, setReferenceNumber } = useContext(SearchContext);  
  const [isDisabled, setIsDisabled] = useState(true) 
  

 function changeHandler (e) {
    e.preventDefault();
    setReferenceNumber(e.target.value);
  }

  useEffect(() => {    
    //gets state from props and updates context
    if(referenceCode) {
      setReferenceNumber(referenceCode)
    }
    // ? ensure that reference is not null, therefore, not trigger an infinite loop
    if(referenceNumber?.length >= 6) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [referenceNumber])

  return (
    <div className="min-h-screen flex justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col">
           <div className="py-3">
           <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Enter Reference #</label>
           <input onChange={changeHandler} type="text" id="referenceNumber" name="refenceNumber" value={referenceNumber} placeholder="DG-5001-8521-993" class="p-3.5 text-sm w-full"/>
         </div>
         <button onClick={searchWithReferenceNumber} class="bg-indigo-500 hover:bg-indigo-600 px-5 py-2 text-sm text-white mt-4 uppercase disabled:opacity-50 " disabled={isDisabled}> Search Order {loading ? "loading..." : " "} </button>
        </div> 
    </div>
  )
}
