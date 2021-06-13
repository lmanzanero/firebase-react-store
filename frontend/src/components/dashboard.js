import React from 'react'
import DashboardLayout from './layouts/DashboardLayout' 
import Orders from './orders'
import CartStats from './CartStats'

export default function Dashboard() {
  return ( 
   <DashboardLayout>
       <CartStats/>
       <Orders/>
   </DashboardLayout>
  )
}
