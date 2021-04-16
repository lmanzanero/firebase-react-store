import React from "react"
import { Router } from "@reach/router" 
import PrivateRoute from "../components/PrivateRoute" 
import Dashboard from "../components/dashboard" 
import Login from "./login"  
import IndexPage from "./index" 
import Product from "../components/product/product"
import ProductDetails from "../templates/ProductDetails"
import Cart from "./cart"

const App = () => (
  <div>  
    <Router basepath="/app"> 
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <Product path="/products/:id" component={ProductDetails} />
      <Cart path="/cart" component={Cart}/>
      <Login path="/login" /> 
      <IndexPage path="/" />
    </Router>
  </div>
)

export default App;