import React from 'react'
import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
    Center,
 
} from '@chakra-ui/react';
import { useEffect, useState } from "react"
import { Link as Recaink  } from 'react-router-dom';
const user= [ {
    "image": "https://teja10.kuikr.com/i6/20220822/GGB-100-brand-Casio-VB201705171774173-ak_LWBP1505598959-1661154629.jpeg",
    "title": "GGb 100 brand casio",
    "description": "",
    "price": "10500",
    "category": "Gujrat",
    "id": 4
  },
  {
      "image": "https://teja10.kuikr.com/i6/20220808/Relocation-sale--Teak-Wood-King-Size-Bed-with-Drawer--Box-and-mattress-Very-good-conditionUrgent-VB201705171774173-ak_LWBP1046441234-1659900365.png",
      "title": "Teak wood bed",
      "description": "",
      "price": "28000",
      "category": "Jaipur",
      "id": 4
    },
    {
      "image": "https://teja8.kuikr.com/i5/20230120/Philips-Induction-Stove-VB201705171774173-ak_WBP472105009-1674227189.webp",
      "title": "Induction stove",
      "description": "",
      "price": "1500",
      "category": "Dehli",
      "id": 4
    },
    {
      "image": "https://teja8.kuikr.com/i6/20230107/Chapati-Roti-Khakhra-Maker-Wattage-900--Stainless-Steel--Black-VB201705171774173-ak_LWBP1082712200-1673110669.webp",
      "title": "Roti maker",
      "description": "",
      "price": "1700",
      "category": "Gujrat",
      "id": 4
    }
]
const Images = () => {
  return (
    <div  style={{height:"350px",width:"1090px" ,margin:"auto",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",}}>
 <Recaink to="/productpage" > <p style={{textAlign:"right"}}>See more</p></Recaink >
   
    <div className="postAdd" 
   
  
  style={{height:"350px",width:"1090px" ,margin:"auto",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",display:"flex",justifyContent:"space-around"}}>
   
   
    {user.map((el)=>(
    <Center>
        <div className='cardDiv'
        style={{height:"300px",width:"200px" ,boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"20px"}}
        >
            <Center  pt={"5px"}>
                <br/>
        <img className='productImage' borderRadius="20px" width={"80%"} src={el.image}/></Center>
            <h3 style={{color:"blue"}}>{el.title}</h3>
            <hr />
                
            <div  style={{display:"flex",justifyContent:"space-evenly"}}>
           
            <p>Price :Rs{el.price}</p>
            <p style={{color:"blue"}}>{el.category}</p>
            </div>
            <hr />
            <Button height={"20px"}>Shop Now</Button>
            </div> 
          </Center>
           
       
    ))}
    
    </div>
    
    </div>
  )
}

export default Images