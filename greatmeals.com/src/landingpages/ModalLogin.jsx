import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    Box,

  } from '@chakra-ui/react'


import { useDisclosure } from '@chakra-ui/react'
import React, { useContext,useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Cartcontext } from '../context/Context'

function LoginModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const{login,token,isAuth}=useContext(Cartcontext)
     const[email,setEmail]=useState("eve.holt@reqres.in")
     const[password,setPassword]=useState("cityslicka")
    const handleSubmit=(e)=>{
      e.preventDefault()
    const user={
      email
      ,password
    }
    fetch(`https://reqres.in/api/login`,{
      method:"POST",
      body:JSON.stringify(user),
      heasers:{
        "Content-Type":"application/json",
      },
    }).then((res)=>res.json())
    .then((json)=>{
      console.log(json)
      login(json.token)
    }).catch((err)=>{
      console.lof(err)
    })


    }
    if(isAuth){
      return <Navigate to="/adminpage" />
    }
  
    return (
      <>
        <Button onClick={onOpen}  
               
                height= "60px"
                width="100px"
                backgroundColor="#fcec52"
                border= "1px solid gold"
             
               fontWeight="bold"  h={"24px"}>login</Button>
       
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>SignIn as Admin</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} ref={initialRef} placeholder='email' />
              </FormControl>
  
              <FormControl mt={4} isRequired>
                <FormLabel>Password</FormLabel>
                <Input  type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='***********' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Link to="/adminpage">
              <Button colorScheme='blue' mr={3}  onClick={handleSubmit} >
               Submit
              </Button>
              </Link>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default LoginModal