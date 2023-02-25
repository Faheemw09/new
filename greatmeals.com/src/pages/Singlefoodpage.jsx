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

export const ProductDetail = () => {
  const [data, setData] = useState([]);
  // const [cart,setCart]=useState([])
  const [loading, setLoading] = useState(false);
  // console.log(cart)

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
  console.log(Globalstate)


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
        <Container maxW={"7xl"}>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 18, md: 24 }}
          >
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
                w={"100%"}
                h={"80%"}
                // h={{ base: '100%', sm: '400px', lg: '500px' }}
              />
            </Flex>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box border={"1px solid gray"} h="375px">
                <Box as={"header"} mt={10}>
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
                    fontSize={"5xl"}
                  > price:₹{price}
                  quantity{quantity}
                
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
                      pl={56}
                    >
                      <Image h={"40px"} w={"200px"} src={delimg} />
                    </SimpleGrid>
                  </Box>
                </Stack>

                <Button
                  rounded={"none"}
                  w={"full"}
                  mt={5}
                  size={"lg"}
                  py={"7"}
                
                  textTransform={"uppercase"}
                  bgColor="#ff9914"
                  _hover={{
                    transform: "translateY(2px)",
                    boxShadow: "lg",
                  }}
                  onClick={() => dispatch({ type: "ADD", payload: data})}
                >
                  Add To Cart
                </Button>

                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent={"center"}
                  pt={"10px"}
                >
                  <Text>Get Delivered With In 30min</Text>
                </Stack>
              </Box>
            </Stack>
          </SimpleGrid>

          <Footer />
        </Container>
      )}
      </Box>
    </div>
  );
};

export default ProductDetail;
