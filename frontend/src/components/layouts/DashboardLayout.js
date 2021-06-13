import React from 'react' 
import Header from '../Header'
import { logout } from '../../services/auth'; 
import { Link } from 'gatsby';

export default function DashboardLayout({children}) {
  return (
    <div > 
      <Header/> 
      <div id="dashboard" className="flex h-auto mb-4">
        <div className=" bg-gray-800 text-gray-300 h-full w-2/12 z-10 mr-4 p-4 px-6">
            <div class="flex flex-col"> 
              <Link to="/app/dashboard" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>

              <Link to="/app/dashboard/products" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Products</Link>

              <Link to="/app/dashboard/orders" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Orders</Link>

              <Link to="/app/dashboard/customers" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Customers</Link>
              <button onClick={logout} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Logout</button>
            </div>
        </div>
        <div className="w-9/12 justify-start m-auto">
            {children}
        </div> 
      </div>
    </div>
  )
}
