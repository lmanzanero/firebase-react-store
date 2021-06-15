import React, { useState, useEffect } from 'react' 
import Layout from '../components/layouts/layout'
import OrderDetails from '../components/orders/OrderDetails'
import SearchOrderInput from '../components/orders/SearchOrderInput'
import useSearchOrder from '../services/hooks/useSearchOrder';

export default function ViewOrder({location}) { 
  const [ referenceNumber, setreferenceNumber ] = useState(location.state.referenceCode || null);    
  const { loading, isValidRefNum, data } = useSearchOrder(referenceNumber);  
  useEffect(() => { 
     console.log("Location state: ", location.state.referenceCode); 
     console.log("Search data", data);
  }, [referenceNumber, isValidRefNum, data])
  function searchOrder (number) { 
    console.log("e")
    setreferenceNumber(number);
  }
  return (
    <Layout> 
       <SearchOrderInput isLoading={loading} refNumber={referenceNumber} search={searchOrder} />
       {/* If search input results in 200 status, then take usere to order details page */}
       {/* <OrderDetails data={data} /> */}
    </Layout>
  )
}
