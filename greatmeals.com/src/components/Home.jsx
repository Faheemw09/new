import React from 'react'
import Footer from '../landingpages/Footer'


import Navbar from './Navbar'
// import ProductDisplay from './ProductDisplay'

import Images from '../landingpages/Images'
import VideoSl from '../pages/Topportionhome'
import greatmealslogo from "../images/greatmealslogo.jpg"
import WithSpeechBubbles from '../pages/HomepageMiddleportion'
import HomepageBottomportion from '../pages/Homepagebottomportion'
const Home = () => {
  return (
    <div style={{fontfamily: 'Open Sans'}}>
        <Navbar/>
   
   {/* <br/>
   <br/> */}
   <VideoSl/>


   <WithSpeechBubbles/>
   <HomepageBottomportion/>

   <br/>
   <div style={{marginLeft:"600px",}} >
   <img   height="70px"  src={greatmealslogo}/>
   </div>
   {/* <Landingproduct/> */}
  
   <Footer/>
    </div>
  )
}

export default Home