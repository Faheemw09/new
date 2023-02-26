

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PostAdd from '../form/PostAdd'
import { Products } from '../pages/Fooddatapage'
import Home from './Home'
// import { Productpage } from './Productpage'
import ProductDetail from '../pages/Singlefoodpage'
import { Restaurant } from '../pages/Restaurantpage'
import SingleRestaurant from '../pages/Singlerestaurantpage'
import LoginModal from '../landingpages/ModalLogin'
import Cartpage from '../pages/Cartpage'
import PrivateRoute from './PrivateRoute'
import Checkout from '../pages/Checkoutpage'
import { AdminPage } from '../Admin/AdminPage'
import AdminLogin from '../landingpages/Adminlogin'

// import PrivateRoute from './PrivateRoute'
const AllRoutes = () => {
  return (
    <div>
<Routes>
    <Route path="/" element={<Home/>}/>
    {/* <Route path="/postadd" element={<PostAdd/>} />
    
    <Route path="/productpage" element={<Productpage/>} /> */}
    <Route path='/login' element={<AdminLogin/>}/>
    <Route path="/adminpage" element={  <PrivateRoute><AdminPage/> </PrivateRoute> } />
    <Route path="/food" element={    <Products/>} />
    <Route path="/food/:id" element={<ProductDetail/>} />

     <Route path="/restaurant" element={<Restaurant/>} />  
     <Route path="/restaurant/:id" element={< SingleRestaurant/>} /> 
     <Route path='/cart' element={<Cartpage/>}/>
     <Route path='/checkout' element={<Checkout/>}/>



   
</Routes>


    </div>
  )
}

export default AllRoutes