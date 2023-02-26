import { ReactNode, useContext } from 'react';
import { useState} from 'react';
import { useAuth0 } from "@auth0/auth0-react"
import {Link as Reactlink, NavLink} from "react-router-dom"
import { FiShoppingCart } from 'react-icons/fi';
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
 Icon,
 
} from '@chakra-ui/react';
import { MoonIcon, SunIcon,SearchIcon,ChevronDownIcon} from '@chakra-ui/icons';

import Mainlandingpage from './Home';
import greatmealslogo from "../images/greatmealslogo.jpg"
import meallogo from "../images/meallogo.png"
import meals2logo from "../images/meals2logo.png"
import lifelogo from "../images/lifelogo.png"

import ModalSignup from '../landingpages/ModalSignup';
import {Link as Reaclink}  from "react-router-dom";
import { Cartcontext } from '../context/Context';
import LoginModal from '../landingpages/ModalLogin';

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
  const [click,setClick]=useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const cartItem=state.reduce((c,i)=>
    c + i.quantity
  ,0)
  const handleAdminButtonClick = () => {
    setIsLoginModalOpen(true);
  };
  return (
    <>
      <Box bg={useColorModeValue('white.100', 'white.100')}  alignItems={'center'} px={4} >
        <Flex h={16}  w={1090} alignItems={'center'} justifyContent={'space-around'}>
        <Reaclink to="/">  <Box  >
     <img  width="1000px" height="100%"  src={meallogo}/>

          </Box>
          </Reaclink>
          <Box>
            {/* <InputGroup>
          <Input placeholder='Search in All india' height="40px" width="400px" HiOutlineSearch  />
          <InputRightAddon  pointerEvents="" bg={"blue.300"}  children={<SearchIcon color="white.300"/>} />
          </InputGroup> */}
               <img  width="1100px" height="700px"  src={lifelogo}/>
          </Box>
          <Box pl="30px">
            {
               isAuthenticated ?(<Button    border= "1px solid gold"
               height= "32px"  backgroundColor="#fcec52" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
               Log Out
             </Button>):(<Button      border= "1px solid gold"
                height= "32px" backgroundColor="#fcec52" onClick={() => loginWithRedirect()}>Login/Register</Button>)
            }
       
            
            {/* <ModalSignup/> */}
            

          </Box>
          
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={6} pl={"10px"}>
            <Center>
              <Button onClick={toggleColorMode} >
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
    src={user.profile}
  />
    <Center>
    <p style={{fontSize:"8px"}}>
    {user.name}
    </p>
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
              <Reaclink to="/adminpage">
               <Button
              
                border= "1px solid gold"
                height= "30px"
                width="90px"
                backgroundColor="white"
             
               fontWeight="bold"
              //  onClick={handleAdminButtonClick}
            > Admin
              {/* <Button onClick={onOpen} colorScheme='blue' fontSize={"12px"} h={"24px"}>Login</Button> */}
              {/* {isLoginModalOpen && <LoginModal onClose={() => setIsLoginModalOpen(false)} />} */}
             {/* { <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)}/>} */}
          
           </Button> 
           </Reaclink>
            {/* <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)}/>
            */}
            <Box
                label="Add to cart"
               pl="30px"
               pt="10px"
                placement={'top'}
                // color={'gray.500'}
                fontSize={'1.2em'}
            color="red"
                w="100px"
                >
                {/* <chakra.a href={'#'} display={'flex'}> */}

                  < Reactlink to="/cart">
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'}       color={'gray.500'} />
                   {cartItem}
                   
                  
                  </Reactlink >
                
         
                
                {/* </chakra.a> */}
              </Box>  
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
 
    style={{ width: '166px' }} isDisabled={click==true}>
      

    <Text isDisabled={click==true}  fontWeight={'bold'} fontSize='15px'>|  Your Food</Text>
  
  </MenuButton>
  
  </Reaclink>

  
  </Menu>
  <Menu >
  <Reaclink to="/restaurant">
  <MenuButton 
 
 style={{ width: '166px' }} >
<Text fontSize='15px' fontWeight={'bold'}> |  Restaurant</Text>


</MenuButton>
</Reaclink>

</Menu>

<Menu>


<MenuButton 
 
 style={{ width: '166px' }} >


 <Text fontSize='15px' fontWeight={'bold'}> |  Recipe</Text>

</MenuButton>


</Menu>
<Menu>
<MenuButton 
 
 style={{ width: '166px' }} >


 <Text fontSize='15px' fontWeight={'bold'}>|  Catering</Text>

</MenuButton>

</Menu>
<Menu>
<MenuButton 
 
 style={{ width: '166px' }} >


<Text fontSize='15px' fontWeight={'bold'}>| Gift Cards </Text>
</MenuButton>

</Menu>
<Menu>
<MenuButton 
 
 style={{ width: '166px' }} >


<Text fontSize='13px'> </Text>

</MenuButton>

</Menu>

  

      




</HStack>

<Divider   border={"1px solid grey"}  color={"grey"} orientation='horizontal' mt={"5px"} />





    </>

  );
}