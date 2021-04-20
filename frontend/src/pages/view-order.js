import React, { useState } from 'react' 
import Layout from '../components/layouts/layout'
import OrderDetails from '../components/orders/OrderDetails'
import SearchOrderInput from '../components/orders/SearchOrderInput'

export default function ViewOrder() {
  const [referenceNumber, setreferenceNumber] = useState('')
  return (
    <Layout>
      {
        !referenceNumber ? <SearchOrderInput/> : <OrderDetails/>
      } 
    </Layout>
  )
}
