import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Text,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
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
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  SearchIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import axios from "axios";
// import {Link } from "react-router-dom"
// import { Grid, GridItem ,Box,Button, Text,Image,Divider,Link,InputGroup,Input,InputRightAddon,Icon, SimpleGrid} from '@chakra-ui/react'
import { Flex, Circle, Badge, chakra, Tooltip } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import lifelogo from "../images/lifelogo.png";

import meallogo from "../images/meallogo.png";
import { Cartcontext } from "../context/Context";
const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

export const AdminPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {logout}=useContext(Cartcontext)
  const btnRef = React.useRef();
  const { colorMode, toggleColorMode } = useColorMode();
  const [admin, setAdmin] = useState([]);
  const [total, setTotal] = useState();
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState("");
  const [form, setForm] = useState({
    rname: "",
    price: "",
    address: "",

    imgdata: "",
    rating: "",
  });

  let sort = "price";
  let limit = 8;
  let lastPage = Math.ceil(total / limit);

  // *********************GET DATA***************************

  const FetchAdmin = () => {
    let apiUrl = `http://localhost:8080/Fooddata`;

    if (order) {
      apiUrl = `http://localhost:8080/Fooddata?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`;
    } else {
      apiUrl = `http://localhost:8080/Fooddata?_page=${page}&_limit=${limit}`;
    }
    return axios.get(apiUrl).then((res) => {
      setTotal(Number(res.headers.get("X-Total-Count")));
      console.log("Admin data", res.data);
      setAdmin(res.data);
    });
  };

  useEffect(() => {
    FetchAdmin();
  }, [page, order]);

  const handelDelete = (id) => {
    axios.delete(`http://localhost:8080/Fooddata/${id}`).then(FetchAdmin);
  };

  const handelPage = (val) => {
    setPage(page + val);
  };

  const handelSort = (val) => {
    setOrder(val);
  };

  const handelForm = () => {
    axios
      .post(`http://localhost:8080/Fooddata`, {
        ...form,
      })

      .then(FetchAdmin);
    setForm(" ");
  };

  return (
    <>
      <Box
        bg={useColorModeValue("white.100", "white.100")}
        alignItems={"center"}
        px={4}
      >
        <Flex
          h={16}
          w={1090}
          alignItems={"center"}
          justifyContent={"space-around"}
        >
          
            {" "}
            <Box>
              <img width="390px" height="55%" src={meallogo} />
            </Box>
        
          <Box>
            {/* <InputGroup>
          <Input placeholder='Search in All india' height="40px" width="400px" HiOutlineSearch  />
          <InputRightAddon  pointerEvents="" bg={"blue.300"}  children={<SearchIcon color="white.300"/>} />
          </InputGroup> */}
            <img width="400px" height="250px" src={lifelogo} />
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={6} pl={"10px"}>
              <Center>
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Center>

              <Center>
                <Link to="/">
                <Button
                  border="1px solid gold"
                  height="30px"
                  width="90px"
                  backgroundColor="#fcec52"
                  fontWeight="bold"
                  onClick={logout}
                >
                  <h5>Logout</h5>
                </Button>
                </Link>
              </Center>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <Divider border={"1px solid grey"} orientation="horizontal" />

      <div
        style={{
          // border: "1px solid green",
          width: "1000px",
          margin: "auto",
          height: "70px",
          display: "flex",
          justifyContent: "space-around",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            width: "600px",
            height: "60Px",
            display: "flex",
            paddingTop: "10px",
            justifyContent: "space-around",
          
            alignItems:"center"
          }}
        >
          <Button
            value="dsec"
            size="sm"
       
            isDisabled={order == "desc"}
            m={"20px"}
            onClick={() => handelSort("desc")}
            backgroundColor="#fcec52"
            border= "1px solid gold"
          >
            Price (High to Low)
          </Button>
          <Button
             backgroundColor="#fcec52"
             border= "1px solid gold"
            value="asc"
            size="sm"
          
            isDisabled={order == "asc"}
            m={"20px"}
            onClick={() => handelSort("asc")}
          >
            Price (Low to High)
          </Button>

          <Button  size="sm" bg={"white"} border=" 1px solid gold">Totalitems: {total}</Button>

          <Button   border= "1px solid gold" color={"black"}    backgroundColor="#fcec52" size="sm" ref={btnRef} colorScheme="teal" onClick={onOpen}>
            Add Product
          </Button>
        </div>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          w={"300px"}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Add a Product</DrawerHeader>

            <DrawerBody>
              <Input
                m={"10px"}
                placeholder="title"
                onChange={(e) => setForm({ ...form, rname: e.target.value })}
                value={form.rname}
              />

              <Input
                m={"10px"}
                placeholder="price"
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                value={form.price}
              />

              <Input
                m={"10px"}
                placeholder="description"
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                value={form.address}
              />

              {/* <Input m={'10px'} placeholder='category'  onChange={(e)=>setForm({...form,category:e.target.value})}
              value={form.category}/> */}

              <Input
                m={"10px"}
                placeholder="imageUrl"
                onChange={(e) => setForm({ ...form, imgdata: e.target.value })}
                value={form.imgdata}
              />

              <Input
                m={"10px"}
                placeholder="rating"
                onChange={(e) => setForm({ ...form, rating: e.target.value })}
                value={form.rating}
              />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue" onClick={handelForm}>
                Save
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
      <Divider   border={"1px solid grey"}  color={"grey"} orientation='horizontal' mt={"5px"} />
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            // border: "1px solid red",
            gap: "20px",
            width: "1000px",
            margin: "auto",
          }}
        >
          {admin?.map((ele) => (
            <div key={ele.id}>
              {/* <Flex p={3} w="full"  > */}
              {/* <Link to={`/products/${ele.id}`}> */}
              <Box
                // bg={useColorModeValue('white', 'gray.800')}
                w="230px"
                h={"350px"}
                border="0.5px solid #E7EEFF"
                rounded="3PX"
                p={"10px"}
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
                  w={"200px"}
                  h={"180px"}
                  pl={"30px"}
                  pt={"10px"}
                  src={ele.imgdata}
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
                        {ele.category}
                      </Badge>
                    )}
                  </Box>
                  <Flex
                    mt="1"
                    justifyContent="space-between"
                    alignContent="center"
                  >
                    <Box
                      fontSize="m"
                      // color={useColorModeValue('gray.500', 'gray.100')} mb={"15px"}
                      fontWeight="semibold"
                      as="h3"
                      lineHeight="tight"
                      isTruncated
                    >
                      {ele.rname}
                    </Box>

                    <Link to="/cart">
                      <Button
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
                      </Button>
                    </Link>
                  </Flex>

                  <Flex justifyContent="space-between" alignContent="center">
                    <Box
                      alignItems="center"
                      border={"1px solid green"}
                      h={"30px"}
                      w={"60px"}
                      fontSize={"xl"}
                      borderRadius={"10px"}
                      bgColor={"#23BB75"}
                      color={"white"}
                    >
                      {ele.rating}
                    </Box>
                    {/* <Rating rating={data.rating} numReviews={data.numReviews} rate={ProductCart.rat}/> */}
                    <Box
                      fontSize="xl"
                      // color={useColorModeValue('black')}fontWeight={"bold"}
                    >
                      <Box as="span" color={"black"} fontSize="xxl" ml={"20px"}>
                        ₹
                      </Box>
                      {ele.price}
                    </Box>
                    {/* <Link to={`/products/${id}`}>more info</Link> */}
                    <Button ml={"15px"} onClick={() => handelDelete(ele.id)}>
                      Delete
                    </Button>
                  </Flex>
                </Box>
              </Box>
              {/* </Link> */}

              {/* </Flex> */}
            </div>
          ))}
        </div>

        {/* <Pagination page={page} handelPage={handelPage} lastPage={lastPage}/> */}
        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "auto",
            width: "200px",
            alignItems: "center",
          }}
        >
          <Button
            bgColor="#ff9914"
            isDisabled={page == 1}
            onClick={() => setPage(page - 1)}
            backgroundColor="#fcec52"
            border= "1px solid gold"
          >
            prev
          </Button>
          <p>{page}</p>
          <Button
            bgColor="#ff9914"
            isDisabled={page == lastPage}
            onClick={() => setPage(page + 1)}
            backgroundColor="#fcec52"
            border= "1px solid gold"
          >
            next
          </Button>
        </div>
      </div>
    </>
  );
};
