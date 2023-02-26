import { StarIcon } from "@chakra-ui/icons";
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { useContext } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Cartcontext } from "../context/Context";
import Footer from "../landingpages/Footer";

const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};


// name={ele.name}
// img={ele.img}
// type={ele.type}

// rating={ele.rating}
// id={ele.id}
// const Globalstate = useContext(Cartcontext);
//   const dispatch = Globalstate.dispatch
//   console.log(Globalstate)
function ProductCard({title, price, image, category, rat, id,quantity }) {
  return (
    <div>
      <Flex p={3} w="full" alignItems="center" justifyContent="center">
        <Link to={`/food/${id}`}>
          <Box
            bg={useColorModeValue("white", "gray.800")}
            w="230px"
            h={"350px"}
            border="0.5px solid #d8f3dc"
            rounded="3PX"
            p={"px"}
            //   shadow="sm"
          >
            {data.isNew && (
              <Circle
                size="10px"
                position="absolute"
                top={2}
                right={2}
                bg="red.200"
              />
            )}

            <Image
              w={"500px"}
              h={"190px"}
              src={image}
              alt={`Picture of ${data.name}`}
              roundedTop="lg"
            />

            <Box p="6">
              <Box d="flex" alignItems="baseline">
                {data.isNew && (
                  <Badge
                    rounded="full"
                    px="5"
                    fontSize="0.8em"
                    colorScheme="#DDF2DC"
                    mb={"10px"}
                  >
                 
                  
                  </Badge>
                )}
              </Box>
              <Flex mt="1" justifyContent="space-between" alignContent="center">
                <Box
                  fontSize="m"
                  color={useColorModeValue("gray.500", "gray.100")}
                  mb={"15px"}
                  fontWeight="semibold"
                  as="h3"
                  lineHeight="tight"
                  isTruncated
                >
                  {title}
                </Box>

                <Link to="/cart">
                  <Tooltip
                    label="Add to cart"
                    bg="white"
                    placement={"top"}
                    color={"gray.800"}
                    fontSize={"1.2em"}
                  >
                    <chakra.a href={"#"} display={"flex"}>
                      <Icon
                        as={FiShoppingCart}
                        h={7}
                        w={7}
                        alignSelf={"center"}
                      
                      />
                    </chakra.a>
                  </Tooltip>
                </Link>
              </Flex>

              <Flex justifyContent="space-between" alignContent="center">
                <Box
                  alignItems="center"
                  border={"1px solid green"}
                  h={"35px"}
                  w={"60px"}
                  pt="5px"
                  fontSize={"lg"}
                  borderRadius={"10px"}
                  bgColor={"#23BB75"}
                  color={"white"}
                
                  
                 
                >
                
                  {rat}
                 
                  < StarIcon h={3} w={3} alignSelf={'center'}  color="#fcec52"/>
                 
                </Box>
                {/* <Rating rating={data.rating} numReviews={data.numReviews} rate={ProductCart.rat}/> */}
                <Box
                  fontSize="md"
                  color={useColorModeValue("black")}
                  fontWeight={"bold"}
                  pt="7px"
                >
                  <Box as="span" color={'black'} fontSize="md" >
                ₹
                </Box>
                  {price}
                </Box>
                {/* <Link to={`/products/${id}`}>more info</Link> */}
              </Flex>
            </Box>
          </Box>
        </Link>
      </Flex>
    </div>
  );
}

export default ProductCard;
