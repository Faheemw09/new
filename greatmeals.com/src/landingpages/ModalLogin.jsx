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
import React from 'react'

function LoginModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button onClick={onOpen} colorScheme='blue' fontSize={"12px"} h={"24px"}>Login</Button>
       
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>SignIn</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type={"email"} ref={initialRef} placeholder='email' />
              </FormControl>
  
              <FormControl mt={4} isRequired>
                <FormLabel>Password</FormLabel>
                <Input type={"password"} placeholder='***********' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} >
               Submit
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default LoginModal