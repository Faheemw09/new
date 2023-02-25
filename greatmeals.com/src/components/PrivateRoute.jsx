import React from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import { Navigate } from 'react-router-dom'
const PrivateRoute = ({children}) => {
    const { loginWithRedirect,isAuthenticated, logout,user } = useAuth0()
    if(!isAuthenticated){
        return   <Navigate to="/login"/>
        
        
    }
  return (
    children
  )
}

export default PrivateRoute