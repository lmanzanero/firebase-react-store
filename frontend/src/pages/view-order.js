import React, { useState, useEffect } from 'react' 
import Layout from '../components/layouts/layout'
import OrderDetails from '../components/orders/OrderDetails'
import SearchOrderInput from '../components/orders/SearchOrderInput'
import useSearchOrder from '../services/hooks/useSearchOrder';

export default function ViewOrder({location}) { 
  const [ referenceNumber, setreferenceNumber ] = useState(location.state.referenceCode || null);    
  const { loading, isValidRefNum, data, searchWithReferenceNumber} = useSearchOrder(referenceNumber);  
  useEffect(() => {  
  }, [referenceNumber, isValidRefNum, data]) 
  return (
    <Layout> 
      {
        isValidRefNum ? <OrderDetails data={data}/> :  <SearchOrderInput isLoading={loading} refNumber={referenceNumber} search={searchWithReferenceNumber} />
      } 
    </Layout>
  )
}
