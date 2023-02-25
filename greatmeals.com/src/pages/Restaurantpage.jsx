import { useContext, useState } from "react";
import React from "react";
import { useEffect } from "react";
import axios from "axios";
import {
  Grid,
  GridItem,
  Box,
  useColorModeValue,
  Heading,
  Divider,
  Link,
  Spinner,
  Text,
  Button,
  Select,
  InputGroup,
  Input,
  InputRightAddon,
} from "@chakra-ui/react";
// import ProductCart from "./ProductCard";
import { SortFilter } from "./Filterpage";
import Navbar from "../components/Navbar";
import Footer from "../landingpages/Footer";

import {
  MoonIcon,
  SunIcon,
  SearchIcon,
  ChevronDownIcon,
  ArrowLeftIcon,
} from "@chakra-ui/icons";
import RestaurantCard from "./Restaurantcard";
import { useSearchParams } from "react-router-dom";
import { Cartcontext } from "../context/Context";
const getPage=(val=1)=>{
  let PageNumber=Number(val)
  if(typeof PageNumber!="number"){
    PageNumber=1
  }if(PageNumber<=0){
    PageNumber=1
  }
  return PageNumber
}
export const Restaurant = () => {
  const [Restaurant, setRestaurant] = useState([]);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState("");
  let[searchparam,setSearchparam]=useSearchParams()
  const [searchquery, setSearchquery] = useState("");
  const[page,setPage]=useState(getPage(searchparam.get("page")))
  const[total,setTotal]=useState(0)
  let limit=8
  let lastpage=Math.ceil(total/limit)
  

  let sort = "rating";

  const getData = () => {
    const params = searchquery ? { q: searchquery } : {};
    let url;
    if (order) {
      url = `http://localhost:8080/Restaurant?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`;
    } else {
      url = `http://localhost:8080/Restaurant?_page=${page}&_limit=${limit}`;
    }
    setLoading(true);

    axios
      .get(url, {
        params,
      })
      .then((res) => {
        const updatedRestaurants = res.data.map((restaurant) => ({
          ...restaurant,
          quantity: 1, // add a quantity field with default value of 1
        }))
        console.log(res);
        setRestaurant(updatedRestaurants);
        setTotal(Number(res.headers.get("X-Total-Count")))
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, [order, searchquery,page]);
  useEffect(()=>{
    setSearchparam({page:page})
  },[page])
  // useEffect(()=>{
  //   if(order){
  //     if(order=="asc"){
  //         const arr=[...data].sort((a,b)=>a.price - b.price)
  //         setData([...arr])
  //     }
  //     if(order=="desc"){
  //         const arr=[...data].sort((a,b)=>b.price - a.price)
  //         setData([...arr])
  //     }
  //   }
  // },[order])
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch
  console.log(Globalstate)

  return (
    <div>
      {/* <Link to='/products'></Link> */}
      {/* <Heading>Products For You</Heading> */}
      <Navbar />

      <Divider border={"0.5px solid gray.600"} mt={"15px"} mb={"15px"} />

      {/* <Box w={"1100px"} h={"100%"}  ml={"100px"} display={"grid"} gridTemplateColumns={"repeat(2,0px)"} > */}

      {/* <Box w={"350px"} h={"820px"}  border={"1px solid #E7EEFF"} borderRadius={"10px"} > <SortFilter/> </Box> */}
      <div
        style={{
          width: "700px",
          height: "70Px",
          display: "flex",
          border: "1px solid #a8b3ab",
          margin: "auto",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "400px",
            height: "50Px",
            display: "flex",
            paddingTop: "10px",
            justifyContent: "space-around",
          }}
        >
          <div>
            <Text fontSize={"md"}>Sort By :</Text>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "320px",
            }}
          >
            <Button
              isDisabled={order == "desc"}
              onClick={() => setOrder("desc")}
              bgColor="#ff9914"
              size="sm"
            >
              Rating (High to Low)
            </Button>

            <Button
              isDisabled={order == "asc"}
              onClick={() => setOrder("asc")}
              bgColor="#ff9914"
              size="sm"
            >
              Rating (Low to High)
            </Button>
          </div>
        </div>
        <Box>
          <InputGroup>
            <Input
              placeholder="Search here"
              height="40px"
              width="200px"
              type={"text"}
              HiOutlineSearch
              onChange={(e) => setSearchquery(e.target.value)}
            />
            <InputRightAddon
              pointerEvents=""
              bg={"#ff9914"}
              children={<SearchIcon color="white.300" />}
            />
          </InputGroup>
        </Box>
      </div>
      <br />
      {loading ? (
        <Spinner    thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'/>
      ) : (
        <Box
          w={"990px"}
          h={"100%"}
          gap="30px"
          border={"1px solid #E7EEFF"}
          marginLeft="150px"
          borderRadius={"10px"}
        >
          <Grid gap={"20px"} gridTemplateColumns="repeat(4,230px)">
            {Restaurant?.map((ele) => {

ele.quantity = 1
                return (
              <GridItem key={ele.id}>
            
                <RestaurantCard
              
                  name={ele.name}
                  img={ele.img}
                  type={ele.type}
                
                  rating={ele.rating}
                  id={ele.id}
                />
              </GridItem>
                )
                })}
          </Grid>
        </Box>
      )}
      {/* </Box> */}
      <br />
      <br />
{/* ******************pagination***************88 */}
<div style={{display:"flex",justifyContent:"space-around", margin:"auto", width:"200px" ,alignItems:"center"}}>
  <Button   bgColor="#ff9914" isDisabled={page==1} onClick={()=>setPage(page-1)}>prev</Button>
  <p>{page}</p>
  <Button  bgColor="#ff9914" isDisabled={page==lastpage} onClick={()=>setPage(page+1)}>next</Button>
  </div>

      <br/>
      <br/>
      <Footer />
    </div>
  );
};
