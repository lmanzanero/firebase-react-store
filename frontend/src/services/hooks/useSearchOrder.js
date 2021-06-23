import { useState, useEffect } from 'react'

export default function useSearchOrder() { 
  const [loading, setLoading] = useState(false);
  const [isValidRefNum, setIsValidRefNum ] = useState(false);
  const [referenceNumber, setReferenceNumber ] = useState(null);
  const [data, setData ] = useState(null);
  const [error, setError] = useState('')   
  useEffect(() => { 
    if(!referenceNumber) return  
  }, [referenceNumber])

  async function searchWithReferenceNumber() {  
    try {
    setLoading(true); 
       //send referenceNumber values to api
    const results = await fetch(`https://us-central1-nancy-s-jewerly.cloudfunctions.net/api/order/${referenceNumber}`)
    const data = await results.json();  
    console.log("Data", data);

      setLoading(false);
      setData(data);
      setIsValidRefNum(true); 
      return data;
    } catch (error) {
      setError(error)
    }
  }

  return { loading, isValidRefNum, data, searchWithReferenceNumber, referenceNumber, setReferenceNumber}
}
