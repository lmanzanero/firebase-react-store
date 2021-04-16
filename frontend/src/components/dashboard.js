import React from 'react'
import Layout from './layout'
import Orders from './orders'

export default function Dashboard() {
  return ( 
   <Layout>
      <div id="dashboard"> 
      <div className="sidebar bg-gray-800 text-gray-300">
          <div class="flex flex-col"> 
            <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a>

            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Products</a>

            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Orders</a>

            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Customers</a>
          </div>
      </div>
      <div className="dashboard-content container mx-auto px-4 py-4">
        <Orders/>
      </div>
      </div> 
   </Layout>
  )
}
