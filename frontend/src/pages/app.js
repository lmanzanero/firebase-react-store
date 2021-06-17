import React from "react"
import { Router } from "@reach/router" 
import PrivateRoute from "../components/PrivateRoute" 
import Dashboard from "../components/dashboard" 
import Login from "./login"  
import IndexPage from "./index"    
import ProductsView from "../components/dashboard/ProductsView"
import OrdersView from "../components/dashboard/OrdersView"
import CustomersView from "../components/dashboard/CustomersView" 

const App = () => (
  <div>   
    <Router basepath="/app"> 
      <PrivateRoute path="/dashboard" component={Dashboard} /> 
      <PrivateRoute path="/dashboard/products" component={ProductsView} /> 
      <PrivateRoute path="/dashboard/orders" component={OrdersView} /> 
      <PrivateRoute path="/dashboard/customers" component={CustomersView} /> 
      <Login path="/login" /> 
      <IndexPage path="/" />
    </Router> 
  </div>
)

export default App;