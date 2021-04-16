import React from 'react'
import DashboardLayout from './layouts/DashboardLayout' 
import Orders from './orders'

export default function Dashboard() {
  return ( 
   <DashboardLayout>
       <Orders/>
   </DashboardLayout>
  )
}
