import React, { useState, useEffect, useContext } from 'react'   
import { SearchProvider } from '../services/context/SearchContext'; 
import OrderSearchView from '../components/orders/OrderSearchView';

export default function ViewOrder({location}) {  
  const [ referenceNumber, setreferenceNumber ] = useState(location.state?.referenceCode || null);
  useEffect(() => {   
  }, [referenceNumber]) 
  return (
    <SearchProvider>
      <OrderSearchView referenceNumber={referenceNumber}/>
    </SearchProvider>
  )
}
