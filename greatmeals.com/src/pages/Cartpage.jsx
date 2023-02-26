import { useContext,useState } from "react";
import { Cartcontext } from "../context/Context";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Divider,
} from '@chakra-ui/react'
import { Navigate } from "react-router-dom";
// const Cartpage = () => {
//   const Globalstate = useContext(Cartcontext);
//   const state = Globalstate.state;
//   const dispatch = Globalstate.dispatch;

//   const total = state.reduce((total, item) => {
//     return total + item.price * item.quantity;
//   }, 0);
//   return (
//     <div className="cart">
//       {state.map((item, index) => {
//         return (
//           <div className="card" key={index}>
//             <img src={item.img} alt="" />
//             <p>{item.name}</p>
//             <p>{item.quantity * item.price}</p>
//             <div className="quantity">
//               <button
//                 onClick={() => dispatch({ type: "INCREASE", payload: item })}>
//                 +
//               </button>
//               <p>{item.quantity}</p>
//               <button
//                 onClick={() => {
//                   if (item.quantity > 1) {
//                     dispatch({ type: "DECREASE", payload: item });
//                   } else {
//                     dispatch({ type: "REMOVE", payload: item });
//                   }
//                 }}>
//                 -
//               </button>
//             </div>
//             <h2 onClick={() => dispatch({ type: "REMOVE", payload: item })}>
//               x
//             </h2>
//           </div>
//         );
//       })}
//       {state.length > 0 && (
//         <div className="total">
//           <h2>{total}</h2>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cartpage
import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { DeleteIcon } from "@chakra-ui/icons";

function Cartpage() {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);
  const [redirectToPayment, setRedirectToPayment] = useState(false);
  const handleCheck = () => {
    setRedirectToPayment(true);
  };

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  console.log("lll", state);
  return (
    <>
      <Navbar />
             <br/>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "7px",
          border:"1px solid grey",
          width:"1050px",
        margin:"auto"
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1,1fr)",
            gap: "20px",
            width: "600px",
            
           
          }}
        >
          {state.map((item, index) => (
          <Center py={2}>
            
              <Stack
                borderWidth="1px"
                borderRadius="lg"
                w={{ sm: "100%", md: "540px" }}
                height={{ sm: "350px", md: "12rem" }}
                direction={{ base: "column", md: "row" }}
                boxShadow={"xl"}
                padding={4}
              >
                <Flex flex={1} bg="blue.200">
                  <Image objectFit="cover" boxSize="100%" src={item.imgdata} />
                </Flex>
                <Stack
                  flex={1}
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  p={1}
                  pt={2}
                >
                  <Box  display={"flex"} justifyContent="space-around" width={"320px"} mt="18px" >
                  <Heading fontSize={"sm"} fontFamily={"body"}>
                    {item.rname}
                  </Heading>
                  <Text fontSize={"sm"} fontFamily={"body"}>
                  {item.address}
                  </Text>
                  </Box>
                  <Box display={"flex"} justifyContent="space-around" width={"320px"} mt="15px" >
                  <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
                   
                    price: ₹{item.price}
                  </Text>
                  <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
                  
                    Subtotal:{item.quantity * item.price}
                    
                    
                  </Text>
                  
                  </Box>
                  <Box display={"flex"} justifyContent="space-around" width={"320px"} paddingLeft="30px"  >
                  <Stack
                    width={"50%"}
                    mt={"2rem"}
                    direction={"row"}
                    padding={2}
                    justifyContent={"space-between"}
                    alignItems={"center"}

                  >
                    <Button
                      border= "1px solid gold"
                    rounded={"full"}
                    _hover={{
                      bg: "#fcec52",
                    }}
                    _focus={{
                      bg: "#fcec52",
                    }}
                      onClick={() => {
                        if (item.quantity > 1) {
                          dispatch({ type: "DECREASE", payload: item });
                        }
                      }}
                      bgColor="white"
                    >
                      -
                    </Button>
                    
                    
                    
                      <Text fontWeight={"bold"} pl="10px">
                      Qty: {item.quantity}
                      </Text>

                    <Button
                    ml={"20px"}
                     _hover={{
                      bg: "#fcec52",
                    }}
                    _focus={{
                      bg: "#fcec52",
                    }}
                    rounded={"full"}
                     onClick={() =>
                      dispatch({ type: "INCREASE", payload: item })
                    }
                    border= "1px solid gold"
                    bgColor="white"
                    >
                      +
                    </Button>
                    {item.quantity * item.price}
                  </Stack>

                  <Stack
                    width={"50%"}
                    mt={"2rem"}
                    direction={"row"}
                    padding={5}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    marginLeft="30px"
                  >
                    <Button
                    border= "1px solid gold"
                      rounded={"full"}
                      bg={"blue.400"}
                      ml={"20px"}
                     bgColor="white"
                    
                      _hover={{
                        bg: "#fcec52",
                      }}
                      _focus={{
                        bg: "#fcec52",
                      }}
                      onClick={() =>
                        dispatch({ type: "REMOVE", payload: item })
                      }
                    >
                    <DeleteIcon color={"red"}/>
                    </Button>
                   
                  </Stack>
                  </Box>
                
                </Stack>
              </Stack>
         
          </Center>
             ))}
        </div>
        <Center height="420px" width={"2px"} p={2}>
            <Divider orientation="vertical" />
          </Center>








          {/* *************************checkout************ */}
        <div style={{width:'400px'}}>
       <Heading color={"#fcec52" }>
      <Text>GreatMeals</Text>
      </Heading>
      <Text>Cart Summary</Text>
      <Text>Free Standard delivery on orders of ₹100 or more</Text>

      <TableContainer>
  <Table variant='simple'>
  
    <TableCaption
    
    
    
    >  {state.length > 0 && (
                   
                      <div>
                      <h2>Total Amount :     ₹{total} </h2>
                      </div>

                    
                   
                  )}
                  </TableCaption>
               
    <Thead>
      <Tr>
        
        <Th></Th>
        <Th> </Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Merchandise Subtotal:</Td>
        {/* <Td>{count*price}</Td> */}
        <Td color={"red"}> {state.length > 0 && (
                    <div className="total">
                      <h2>₹{total}</h2>
                    </div>
                  )}</Td>
        
      </Tr>
      <Tr>
        <Td>Shipping</Td>
        <Td>FREE</Td>
       
      </Tr>
      <Tr>
        <Td>Estimated Tax</Td>
        <Td>₹0.00</Td>
        
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th></Th>
        <Th></Th>
        <Th></Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>

    <Button border= "1px solid gold"  bgColor={"#fcec52"} w='300px'onClick={handleCheck}>CheckOut</Button>
    {redirectToPayment && <Navigate to="/checkout" />}
    </div>

      </div>
    </>
  );
}
export default Cartpage;
