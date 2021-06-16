import { useState, useEffect } from 'react'

export default function useSearchOrder(referenceNumber) {
  const [loading, setLoading] = useState(false);
  const [isValidRefNum, setIsValidRefNum ] = useState(false);
  const [data, setData ] = useState(null);

  useEffect(() => {
    if(!referenceNumber) return  
  }, [referenceNumber])

  async function searchWithReferenceNumber(){
     try {
      console.log("hello search order")
      setLoading(true);
      setTimeout(() => {  
      setLoading(false);
      setData("hello") 
      setIsValidRefNum(true);  
      }, 3000);
     } catch (error) {
       
     }
  }

  return { loading, isValidRefNum, data, searchWithReferenceNumber }
}
