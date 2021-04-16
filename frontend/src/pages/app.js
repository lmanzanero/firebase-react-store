import React from "react"
import { Router } from "@reach/router" 
import PrivateRoute from "../components/PrivateRoute" 
import Dashboard from "../components/dashboard" 
import Login from "./login"  
import IndexPage from "./index"   

const App = () => (
  <div>  
    <Router basepath="/app"> 
      <PrivateRoute path="/dashboard" component={Dashboard} /> 
      <Login path="/login" /> 
      <IndexPage path="/" />
    </Router>
  </div>
)

export default App;