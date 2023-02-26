import React, { useContext } from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import { Navigate } from 'react-router-dom'
import { Cartcontext } from '../context/Context'
const PrivateRoute = ({children}) => {
    const { isAuth } = useContext(Cartcontext)
    if(!isAuth){
        return   <Navigate to="/login"/>
        
        
    }
  return (
    children
  )
}

export default PrivateRoute