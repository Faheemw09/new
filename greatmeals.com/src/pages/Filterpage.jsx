import { Box ,Text,Select,useColorModeValue, Divider, Image} from '@chakra-ui/react'
import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    option,
    
  } from '@chakra-ui/react'
  import { ChevronDownIcon } from '@chakra-ui/icons'

  
export const SortFilter = () => {
 

  return (
    <div>
     <Text fontSize={"xl"} mr={"230px"} >Sort By :</Text>
        <Select w={"300px"} h={"50px"} ml={"22px"} color={useColorModeValue('gray.900', 'gray.900')} placeholder={"--"}> 

            <option><Button >Price (High to Low)</Button></option>
            <option><Button >Price (Low to High)</Button></option>

        </Select>

<Divider border={"0.5px solid gray.600"} mt={"15px"}/>
     {/* ***************************Filter*************************** */}

    <Text mt={"20px"} mr={"250px"} fontSize={"2xl"}>Filters</Text>
     <Text fontSize={"sm"}  mr={"230px"} color={'gray'}>100+ Products</Text>

        
     
<Menu>
    <MenuButton as={Button} bg={useColorModeValue('gray.100', 'gray.800')}
     fontSize={"xl"} mr={"230px"} 
      w={"300px"} h={"60px"} ml={"20px"}>
     Gender  <ChevronDownIcon ml={"160px"}/>
    </MenuButton>
  <MenuList >
    <MenuItem color={"red"}>Sarees</MenuItem>  
    <MenuItem>All Sarees </MenuItem>
    <MenuItem>Silk Sarees </MenuItem>
    <MenuItem>Cotton Sarees</MenuItem>
    <MenuItem>Chiffon Sarees</MenuItem>
    
    <MenuItem color={"red"}>Kurtis</MenuItem>
  </MenuList>
</Menu>
       
<Divider border={"0.5px solid gray.600"} mt={"15px"} mb={"15px"}/>

<Menu>
    <MenuButton as={Button} bg={useColorModeValue('gray.100', 'gray.800')}
     fontSize={"xl"} mr={"230px"} 
     w={"300px"} h={"60px"} ml={"20px"}>
     Color  <ChevronDownIcon ml={"160px"}/>
    </MenuButton>
  <MenuList >
    <MenuItem color={"red"}>Sarees</MenuItem>  
    <MenuItem>All Sarees </MenuItem>
    <MenuItem>Silk Sarees </MenuItem>
    <MenuItem>Cotton Sarees</MenuItem>
    <MenuItem>Chiffon Sarees</MenuItem>
    
    <MenuItem color={"red"}>Kurtis</MenuItem>
  </MenuList>
</Menu>

<Divider border={"0.5px solid gray.600"} mt={"15px"} mb={"15px"}/>

<Menu>
    <MenuButton as={Button} bg={useColorModeValue('gray.100', 'gray.800')}
     fontSize={"xl"} mr={"230px"} 
     w={"300px"} h={"60px"} ml={"20px"}>
     Price <ChevronDownIcon ml={"160px"}/>
    </MenuButton>
  <MenuList >
    <MenuItem color={"red"}>Sarees</MenuItem>  
    <MenuItem>All Sarees </MenuItem>
    <MenuItem>Silk Sarees </MenuItem>
    <MenuItem>Cotton Sarees</MenuItem>
    <MenuItem>Chiffon Sarees</MenuItem>
    
    <MenuItem color={"red"}>Kurtis</MenuItem>
  </MenuList>
</Menu>

<Divider border={"0.5px solid gray.600"} mt={"15px"} mb={"15px"}/>
<Menu>
    <MenuButton as={Button} bg={useColorModeValue('gray.100', 'gray.800')}
     fontSize={"xl"} mr={"230px"} 
      w={"300px"} h={"60px"} ml={"20px"}>
     Rating  <ChevronDownIcon ml={"160px"}/>
    </MenuButton>
  <MenuList >
    <MenuItem color={"red"}>Sarees</MenuItem>  
    <MenuItem>All Sarees </MenuItem>
    <MenuItem>Silk Sarees </MenuItem>
    <MenuItem>Cotton Sarees</MenuItem>
    <MenuItem>Chiffon Sarees</MenuItem>
    
    <MenuItem color={"red"}>Kurtis</MenuItem>
  </MenuList>
</Menu>

<Divider border={"0.5px solid gray.600"} mt={"15px"} mb={"15px"}/>

<Menu>
    <MenuButton as={Button} bg={useColorModeValue('gray.100', 'gray.800')}
     fontSize={"xl"} mr={"230px"} 
      w={"300px"} h={"60px"} ml={"20px"}>
     Material  <ChevronDownIcon ml={"160px"}/>
    </MenuButton>
  <MenuList >
    <MenuItem color={"red"}>Sarees</MenuItem>  
    <MenuItem>All Sarees </MenuItem>
    <MenuItem>Silk Sarees </MenuItem>
    <MenuItem>Cotton Sarees</MenuItem>
    <MenuItem>Chiffon Sarees</MenuItem>
    
    <MenuItem color={"red"}>Kurtis</MenuItem>
  </MenuList>
</Menu>

<Divider border={"0.5px solid gray.600"} mt={"15px"} mb={"15px"}/>
<Menu>
    <MenuButton as={Button} bg={useColorModeValue('gray.100', 'gray.800')}
     fontSize={"xl"} mr={"230px"} 
      w={"300px"} h={"60px"} ml={"20px"}>
     Brand  <ChevronDownIcon ml={"160px"}/>
    </MenuButton>
  <MenuList >
    <MenuItem color={"red"}>Sarees</MenuItem>  
    <MenuItem>All Sarees </MenuItem>
    <MenuItem>Silk Sarees </MenuItem>
    <MenuItem>Cotton Sarees</MenuItem>
    <MenuItem>Chiffon Sarees</MenuItem>
    
    <MenuItem color={"red"}>Kurtis</MenuItem>
  </MenuList>
</Menu>

<Divider border={"0.5px solid gray.600"} mt={"15px"} mb={"15px"}/>

<Menu>
    <MenuButton as={Button} bg={useColorModeValue('gray.100', 'gray.800')}
     fontSize={"xl"} mr={"230px"} 
      w={"300px"} h={"60px"} ml={"20px"}>
     Category  <ChevronDownIcon ml={"160px"}/>
    </MenuButton>
  <MenuList >
    <MenuItem color={"red"}>Sarees</MenuItem>  
    <MenuItem>All Sarees </MenuItem>
    <MenuItem>Silk Sarees </MenuItem>
    <MenuItem>Cotton Sarees</MenuItem>
    <MenuItem>Chiffon Sarees</MenuItem>
    
    <MenuItem color={"red"}>Kurtis</MenuItem>
  </MenuList>
</Menu>

<Divider border={"0.5px solid gray.600"} mt={"30px"} mb={"15px"}/>


    <Image borderRadius={"10px"} src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=600"/>
    {/* <Image  borderRadius={"10px"} src="https://th.bing.com/th/id/OIP.zMc3e0l5_6YgsBHq9k6J7QAAAA?w=193&h=256&c=7&r=0&o=5&dpr=2&pid=1.7"/> */}

    <br/>
    <Image borderRadius={"10px"} src="https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&w=600"/>
     <br/>

     <Image borderRadius={"10px"} src="https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&w=600"/>
  
    <br/>
     <Image borderRadius={"10px"} h={"380px"} w={"375px"}src="https://images.pexels.com/photos/1502216/pexels-photo-1502216.jpeg?auto=compress&cs=tinysrgb&w=600"/>
     <br/>
     <Image borderRadius={"10px"} h={"380px"} w={"350px"}src="https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=600"/>
    </div>
  )
}