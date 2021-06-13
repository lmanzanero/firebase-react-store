import React from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import Orders from '../orders'

export default function OrdersView() {
  return (
    <DashboardLayout>
      <h1>Orders</h1>
      <Orders/>
    </DashboardLayout>
  )
}
