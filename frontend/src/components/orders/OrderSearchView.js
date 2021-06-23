import React, { useContext, useEffect } from 'react'
import { SearchContext } from '../../services/context/SearchContext'
import Layout from '../layouts/layout';
import SearchOrderInput from './SearchOrderInput';
import OrderDetails from './OrderDetails';

export default function OrderSearchView({referenceNumber}) {
  const { isValidRefNum } = useContext(SearchContext); 
  useEffect(() => {
      
  }, [isValidRefNum])
  return (
    <Layout> 
      {
        isValidRefNum ? <OrderDetails /> :  <SearchOrderInput />
      } 
    </Layout>
  )
}
