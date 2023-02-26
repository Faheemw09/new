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
  Spinner,
  Link,
} from "@chakra-ui/react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../landingpages/Footer";
import { Cartcontext } from "../context/Context";
import {Link as Reactlink, NavLink} from "react-router-dom"
import { useToast } from '@chakra-ui/react'

export const ProductDetail = () => {
  const [data, setData] = useState([]);
  // const [cart,setCart]=useState([])
  const [loading, setLoading] = useState(false);
  // console.log(cart)
  const [isInCart, setIsInCart] = useState(false);

  const { id } = useParams();
  console.log(id);

  const getData = (id) => {
    setLoading(true)
    return axios
      .get(`http://localhost:8080/Fooddata/${id}`)
      .then((res) => {
        // const updated = res.data.map((data) => ({
        //   ...data,
        //   quantity: 1, // add a quantity field with default value of 1
        // }))
        const updated={...res.data,quantity:1}
        console.log(updated)
        setData(updated)
        // console.log("hhh",res.data);
        // setData(res.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setLoading(false)
      });
  };

  // const handelClick=(()=>{
  //   setCart([...cart,{id,title ,price}])
  // });

  useEffect(() => {
    getData(id);
  }, [id]);

  // const handelClick=()=>{
  //   setCart([...cart,{id,price,title}])

  // }
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch
  const toast=useToast()
  console.log(Globalstate)
  const handleAddToCart = () => {
    dispatch({ type: "ADD", payload: data });
    setIsInCart(true);
    toast({
      title: '',
      description: "Item added to cart sucessfully!.",
      status: 'success',
      duration: 1000,
      isClosable: true,
    })
  };

  const { imgdata, rname,price, address, quantity,somedata, delimg } = data;
  return (
    <div>
      <Box>
        <Navbar />
        {/* <h1>Singel Product Page</h1> */}
        <br/>
        {loading ? (
        <Spinner   thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl' />
      ) : (
        <Container maxW={"5xl"}  border={"1px solid gray"} h="450px" w={"1100px"}  rounded={"md"}>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 2, md: 4 }}
            py={{ base:3, md: 7 }}
          >
            <Box>
            <Flex>
              <Image
                border={"1px solid gray"}
                p={"40px"}
                rounded={"md"}
                alt={"product image"}
                // src={
                //   'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080'
                // }
                src={imgdata}
                fit={"cover"}
                align={"center"}
                w={"85%"}
                h={"50%"}
                // h={{ base: '100%', sm: '400px', lg: '500px' }}
              />
            </Flex>
            </Box>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box border={"1px solid gray"} h="400px"   rounded={"md"}>
                <Box as={"header"} mt={6}>
                  <Heading
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{ base: "1xl", sm: "2xl", lg: "1xl" }}
                  >
                    {/* Automatic Watch */}
                    Title: {rname}
                   
                  </Heading>
                  <Text
                   
                    fontWeight={300}
                    fontSize={"4xl"}
                  > Price:  ₹{price}
                
                
                  </Text>
                </Box>

                <Stack
                  spacing={{ base: 4, sm: 6 }}
                  direction={"column"}
                  divider={
                    <StackDivider
                     
                    />
                  }
                >
                  <VStack spacing={{ base: 4, sm: 6 }}>
                    <Text
                     
                      fontSize={"1xl"}
                      fontWeight={"300"}
                    >
                      <Text color="red">*{somedata}</Text>
                    </Text>
                  </VStack>
                  <Box>
                    <SimpleGrid
                      columns={{ base: 1, md: 2 }}
                      spacing={10}
                      pl="170px"
                      pt={"20px"}
                    >
                      <Image h={"40px"} w={"200px"} src={delimg} />
                    </SimpleGrid>
                  </Box>
                </Stack>
             
                {/* {isInCart ? (
        <Link to="/cart">
          <Button>Go to Cart</button>
        </Link>
      ) : (
        <button onClick={handleAddToCart}>Add to Cart</button>
      )} */}
      <Box mt={"39px"}>
               {isInCart ? (
                <Reactlink to="/cart">
                <Button

                  rounded={"none"}
                  w={"full"}
                  mt={5}
                  size={"lg"}
                  py={"7"}
                
                  textTransform={"uppercase"}
                  backgroundColor="#fcec52"
                  _hover={{
                    transform: "translateY(2px)",
                    boxShadow: "lg",
                  }}
                 
                >
                  Go to Cart
                </Button>
                </Reactlink>
               ):( 

                <Button

                rounded={"none"}
                w={"full"}
                mt={5}
                size={"lg"}
                py={"7"}
              
                textTransform={"uppercase"}
                backgroundColor="#fcec52"
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "lg",
                }}
                onClick={handleAddToCart}
              >
               Add To Cart
              </Button>

               )}
               </Box>
               
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent={"center"}
                  pt={"20px"}
                >
                  <Text>Get Delivered With In 30min</Text>
                </Stack>
              </Box>
            </Stack>
          </SimpleGrid>

         
        </Container>
      )}
      </Box>
      <Footer />
    </div>
  );
};

export default ProductDetail;
