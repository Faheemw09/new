

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
    Input,
    FormLabel,
    Box,
    Flex,
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'
  import React from 'react'
import LoginModal from './ModalLogin'

function ModalSignup() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button onClick={onOpen} width="115px" height="34px" border={"1px solid grey"} >Login/Register</Button>
        
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl isRequired >
                <FormLabel>First name</FormLabel>
                <Input ref={initialRef} placeholder='First name' />
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder='Email' />
              </FormControl>


              <FormControl mt={4} isRequired>
                <FormLabel>Password</FormLabel>
                <Input type={"password"} placeholder='**********' />
              </FormControl>
            </ModalBody>
            <Box>
                <Flex  alignItems={'center'} pl={"80px"}>
         Already Have an account? <LoginModal/>
         </Flex>
         </Box>
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Signup
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default ModalSignup