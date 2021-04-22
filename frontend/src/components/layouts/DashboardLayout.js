import React from 'react'
import { Router } from "@reach/router" 
import Header from '../Header'
import { logout } from '../../services/auth'; 
import { Link } from 'gatsby';

export default function DashboardLayout({children}) {
  return (
    <div> 
      <Header/> 
      <div id="dashboard">
        <div className="sidebar bg-gray-800 text-gray-300">
            <div class="flex flex-col"> 
              <Link to="/app/dashboard" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</Link>

              <Link to="/app/dashboard/products" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Products</Link>

              <Link to="/app/dashboard/orders" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Orders</Link>

              <Link to="/app/dashboard/customers" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Customers</Link>
              <button onClick={logout} class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Logout</button>
            </div>
        </div>
        <div className="dashboard-content container mx-auto px-4 py-4">
            {children}
        </div> 
      </div>
    </div>
  )
}
