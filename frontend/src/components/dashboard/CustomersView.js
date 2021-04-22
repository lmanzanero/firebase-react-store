import React from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import Orders from '../orders'

export default function CustomersView() {
  return (
    <DashboardLayout>
      <Orders/>
    </DashboardLayout>
  )
}
