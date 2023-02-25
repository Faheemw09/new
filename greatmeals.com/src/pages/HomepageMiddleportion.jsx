import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Img,
  } from '@chakra-ui/react';
  
  const IMAGE1 =
    'https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/dd109bb1f7572eed.png';
    const IMAGE2="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/8148ef38ec4096b7.png"
    const IMAGE3="https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?auto=compress&cs=tinysrgb&w=600"
  const img="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1000"
  export default function ProductSimple() {
    return (
        <Box display={"flex"} justifyContent="space-around" height={"400px"} backgroundImage={img} mb="30px">
      <Center py={12}>
        <Box
          role={'group'}
        //   p={6}
          maxW={'300px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
        >
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${IMAGE1})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(10px)',
              },
            }}
            >
            <Image
              rounded={'sm'}
              height={230}
              width={400}
              objectFit={'cover'}
              src={IMAGE1}
            />
          </Box>
          <Stack pt={10} >
          
            <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={400} pb={"15px"}>
             Feed Your Employees
            </Heading>
            
          </Stack>
        </Box>
      </Center>
      {/* ***************************************************two************* */}
      <Center py={12}>
        <Box
          role={'group'}
        //   p={6}
          maxW={'310px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${IMAGE2})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(10px)',
              },
            }}>
            <Image
              rounded={'sm'}
              height={230}
              width={400}
              objectFit={'cover'}
              src={IMAGE2}
            />
          </Box>
          <Stack pt={10} >
          
            <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={400} pb={"15px"}>
            Your restaurant, delivered
            </Heading>
           
          </Stack>
        </Box>
      </Center>
      {/* **************************************three********************* */}
      <Center py={12}>
        <Box
          role={'group'}
        //   p={6}
          maxW={'310px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${IMAGE3})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(10px)',
              },
            }}>
            <Image
              rounded={'sm'}
              height={230}
              width={400}
              objectFit={'cover'}
              src={IMAGE3}
            />
          </Box>
          <Stack pt={10} >
          
            <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={400} pb={"15px"}>
            

Deliver with Great Meals
            </Heading>
          
          </Stack>
        </Box>
      </Center>
      </Box>



// ****************************************box bottom******************



    )
  }