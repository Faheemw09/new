import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    Link,
    Spinner
    
  } from '@chakra-ui/react';
import { useState,useEffect, useContext } from 'react';
 import axios from "axios"
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../landingpages/Footer';
import { Cartcontext } from '../context/Context';



const SingleRestaurant = () => {
  const [Restaurant,setRestaurant]=useState([])
  const [loading, setLoading] = useState(false);
  // const [cart,setCart]=useState([])

  // console.log(cart)

  const {id}=useParams()
  console.log(id)

const getData=(id)=>{
  setLoading(true)
  return(
      axios.get(`http://localhost:8080/Restaurant/${id}`)
      .then((res)=>{
          console.log(res)
          setRestaurant(res.data)
          setLoading(false)
      })
      .catch((error)=>{
          console.log(error)
          setLoading(false)
      })
  )
  
}

// const handelClick=(()=>{
//   setCart([...cart,{id,title ,price}])
// });

useEffect(()=>{
  getData(id)
},[id])

// const handelClick=()=>{
//   setCart([...cart,{id,price,title}])
// }
const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch
  console.log(Globalstate)


 const{img,address,name,rating,type,quantity}=Restaurant
    return (
    
      <div>
        <Box>
        <Navbar/>
        {/* <h1>Singel Product Page</h1> */}
       
        <br/>
        <br/>
        {loading ? (
        <Spinner   thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl' />
      ) : (
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
          
            <Image
            border={"1px solid gray"}
            p={"40px"}
              rounded={'md'}
              alt={'product image'}
              // src={
              //   'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080'
              // }
              src={img}
              fit={'cover'}
              align={'center'}
              w={'100%'} h={"80%"}
              // h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box  border={"1px solid gray"}  h="273px">
          <Box as={'header'}  mt={10}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '1xl', sm: '2xl', lg: '1xl' }}>
                {/* Automatic Watch */}
                {name}
              </Heading>
              <Text
               
                fontWeight={300}
                fontSize={'lg'}>
                Address:{address}
            
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                
                  fontSize={'1xl'}
                  fontWeight={'300'}>
                 <Text>
                  {quantity}

                    Contact No:+919682581915
                 </Text>
                  
                </Text>
               
              </VStack>
              <Box>
                
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} pl={56}>
                  
                 <Image h={"40px"} w={"200px"} src={img} />
                </SimpleGrid>
              </Box>
              
            </Stack>
  
            <Button
              rounded={'none'}
              w={'full'}
             
             
              size={'lg'}
              py={'7'}
            
              textTransform={'uppercase'}
              bgColor='#ff9914'
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }} 
              
              onClick={() => dispatch({ type: "ADD", payload: Restaurant })}
              >
                
           Book a Table
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'} pt={"10px"} >
            <Text></Text>
              
            </Stack>
            </Box>
          </Stack>
        
        </SimpleGrid>
        
        <Footer/>
      </Container>
      )
    }

      </Box>
      
     
      </div>
    );
    
  }

  export default  SingleRestaurant