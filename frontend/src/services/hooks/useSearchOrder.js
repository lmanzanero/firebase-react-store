import { useState, useEffect } from 'react'

export default function useSearchOrder(referenceNumber) {
  const [loading, setLoading] = useState(false);
  const [isValidRefNum, setIsValidRefNum ] = useState(false);
  const [data, setData ] = useState(null);

  useEffect(() => {
    if(!referenceNumber) return
    setLoading(true);
    setTimeout(() => {  
    setLoading(false);
    setData("hello") 
    setIsValidRefNum(true); 
    }, 3000);
  }, [referenceNumber])

  return { loading, isValidRefNum, data }
}
