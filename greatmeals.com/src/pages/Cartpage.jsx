import { useContext } from "react";
import { Cartcontext } from "../context/Context";

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

function Cartpage() {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  console.log("lll", state);
  return (
    <>
      <Navbar />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "20px",
        
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1,1fr)",
            gap: "20px",
            width: "700px",
            border: " 1px solid red",
           
          }}
        >
          {state.map((item, index) => (
          <Center py={2}>
            
              <Stack
                borderWidth="1px"
                borderRadius="lg"
                w={{ sm: "100%", md: "540px" }}
                height={{ sm: "350px", md: "16rem" }}
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
                  <Heading fontSize={"md"} fontFamily={"body"}>
                    {item.rname}
                  </Heading>
                  <Heading fontSize={"md"} fontFamily={"body"}>
                    price: ₹{item.price}
                  </Heading>
                  <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
                    {item.address}
                    {item.quantity * item.price}
                  </Text>
                  <Stack
                    width={"50%"}
                    mt={"2rem"}
                    direction={"row"}
                    padding={2}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Button
                      onClick={() =>
                        dispatch({ type: "INCREASE", payload: item })
                      }
                    >
                      +
                    </Button>

                    <Text>{item.quantity}</Text>

                    <Button
                      onClick={() => {
                        if (item.quantity > 1) {
                          dispatch({ type: "DECREASE", payload: item });
                        }
                      }}
                    >
                      -
                    </Button>
                    {item.quantity * item.price}
                  </Stack>

                  <Stack
                    width={"50%"}
                    mt={"2rem"}
                    direction={"row"}
                    padding={2}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Button
                      flex={1}
                      fontSize={"sm"}
                      rounded={"full"}
                      bg={"blue.400"}
                      color={"white"}
                      boxShadow={
                        "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                      }
                      _hover={{
                        bg: "blue.500",
                      }}
                      _focus={{
                        bg: "blue.500",
                      }}
                      onClick={() =>
                        dispatch({ type: "REMOVE", payload: item })
                      }
                    >
                      Remove
                    </Button>
                  </Stack>
                  {state.length > 0 && (
                    <div className="total">
                      <h2>{total}</h2>
                    </div>
                  )}
                </Stack>
              </Stack>
         
          </Center>
             ))}
        </div>
      </div>
    </>
  );
}
export default Cartpage;
