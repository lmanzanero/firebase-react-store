import React, { useState, useEffect } from 'react' 
import Layout from '../components/layouts/layout'
import OrderDetails from '../components/orders/OrderDetails'
import SearchOrderInput from '../components/orders/SearchOrderInput'
import useSearchOrder from '../services/hooks/useSearchOrder';

export default function ViewOrder({location}) {
  const [ referenceNumber, setreferenceNumber ] = useState(null);    
  const { loading, isValidRefNum, data } = useSearchOrder(referenceNumber);  
  useEffect(() => { 
     console.log("Is valid: ", isValidRefNum);
     console.log("Ref Num: ", referenceNumber);
     console.log("data", data);
  }, [referenceNumber, isValidRefNum, data])
  const searchOrder = async (number) => { 
    setreferenceNumber(number);
  }
  return (
    <Layout>
      {
        !referenceNumber || !isValidRefNum || !data ? <SearchOrderInput isLoading={loading} refNumber={referenceNumber} search={searchOrder} /> : <OrderDetails data={data} />
      } 
    </Layout>
  )
}
