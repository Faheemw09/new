import { ReactNode } from 'react';
import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react"
import {Link as Reactlink} from "react-router-dom"
import {
  Box,
  Flex,
  Text,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
  Divider,
 HStack,
  Input,
  InputGroup,
  InputRightAddon,
 Dropdown,
 
} from '@chakra-ui/react';
import { MoonIcon, SunIcon,SearchIcon,ChevronDownIcon} from '@chakra-ui/icons';

import Mainlandingpage from './Home';
import greatmealslogo from "../images/greatmealslogo.jpg"
import ModalSignup from '../landingpages/ModalSignup';
import {Link as Reaclink}  from "react-router-dom";

// const NavLink = ({ children }: { children: ReactNode }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {children}
//   </Link>
// );

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loginWithRedirect,isAuthenticated, logout,user } = useAuth0()


  
  return (
    <>
      <Box bg={useColorModeValue('white.100', 'gray.900')} px={4}>
        <Flex h={16} pl="190px" w={1090} alignItems={'center'} justifyContent={'space-around'}>
        <Reaclink to="/">  <Box  pr={'19px'}>
     <img  width="70px" height="70px"  src={greatmealslogo}/>

          </Box>
          </Reaclink>
          <Box>
            <InputGroup>
          <Input placeholder='Search in All india' height="40px" width="400px" HiOutlineSearch  />
          <InputRightAddon  pointerEvents="" bg={"blue.300"}  children={<SearchIcon color="white.300"/>} />
          </InputGroup>
          </Box>
          <Box pl="30px">
            {
               isAuthenticated ?(<Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
               Log Out
             </Button>):(<Button onClick={() => loginWithRedirect()}>Login/Register</Button>)
            }
       
            
            {/* <ModalSignup/> */}
            

          </Box>
          
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={6} pl={"10px"}>
            <Center>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              </Center>

              {
                  isAuthenticated &&
              <Menu>
               
  <MenuButton
  as={Button}
  rounded={'full'}
  variant={'link'}
  cursor={'pointer'}
  minW={0}>
   
  <Avatar
    size={'sm'}
    src={''}
  />
    <Center>
    <p>Welcome</p>
  </Center>
</MenuButton>
               
              
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                 
                    <Avatar
                      size={'2xl'}
                      src={''}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>{user.name}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem> </MenuItem>
                </MenuList>
                
              </Menu>
                } 
              <Center>
                <Reactlink to="/postadd">
              <Button
              
                border= "1px solid gold"
                height= "30px"
                width="90px"
                backgroundColor="#fcec52"
                color="black"
               fontWeight="bold"
           
            >
              <h5>Post Ad</h5>
            </Button>
            </Reactlink>
            </Center>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <Divider   border={"1px solid grey"} orientation='horizontal' />


      {/* ******************************MENU**************** */}

  <HStack  pt={"10px"} pl="200px" w={1090} alignItems={'center'} justifyContent={'space-around'}>
      <Menu >
      <Reaclink to="/food">
  <MenuButton 
 
    style={{ width: '166px' }} >

    <Text  fontSize='15px'>Your Food<ChevronDownIcon /></Text>
  
  </MenuButton>
  </Reaclink>
  
  </Menu>
  <Menu >
  <Reaclink to="/restaurant">
  <MenuButton 
 
 style={{ width: '166px' }} >
<Text fontSize='15px'> Restaurant <ChevronDownIcon /></Text>


</MenuButton>
</Reaclink>

</Menu>

<Menu>

<Reaclink to="/cart">
<MenuButton 
 
 style={{ width: '166px' }} >


 <Text fontSize='13px'> Cart <ChevronDownIcon /></Text>

</MenuButton>
</Reaclink>

</Menu>
<Menu>
<MenuButton 
 
 style={{ width: '166px' }} >


 <Text fontSize='13px'> HOME APPLIANCES <ChevronDownIcon /></Text>

</MenuButton>

</Menu>
<Menu>
<MenuButton 
 
 style={{ width: '166px' }} >


<Text fontSize='13px'>KIDS & TOYS  <ChevronDownIcon /></Text>
</MenuButton>

</Menu>
<Menu>
<MenuButton 
 
 style={{ width: '166px' }} >


<Text fontSize='13px'>SPORTS & FASHION <ChevronDownIcon /></Text>

</MenuButton>

</Menu>


  

      




</HStack>
<Divider  pt={"10px"} color={"grey"} orientation='horizontal' />





    </>

  );
}