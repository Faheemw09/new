import { Box, Button, Text } from "@chakra-ui/react";
const img =
  "https://images.pexels.com/photos/952482/pexels-photo-952482.jpeg?auto=compress&cs=tinysrgb&w=1300&h=850";
function HomepageBottomportion() {
  return (
    <>
      <Box height={"700px"} width="auto" backgroundImage={img}>
        <Box pt={"180px"} height={"100px"} width="300px" ml={"600px"}>
          <Text
            fontStyle="italic"
            fontWeight={"bold"}
            fontSize="3xl"
            color="#fb8b24"
          >
            {" "}
            Already a member?
          </Text>
          <Button bgColor='#133c55' color="white" size='sm'> Login Online</Button>
          <Text color="051923">
            Or download the Great Rewards™ App and access your rewards whenever
            you want.
          </Text>
        </Box>

        <Box height={"300px"} width={"500px"} ml={"550px"} pt={"120px"}>
          <Text
            //  fontSize={{ base: "lg", sm: "xl"}}
            fontStyle="italic"
            pt="250px"
            color="051923"
          >
            Join Great Rewards™ through our app and get FREE Chips & Guac (does
            not include tax) when you sign up. Please note it may take up to one
            hour to receive the FREE Chips & Guac reward in your Great Rewards™
            account. One account per individual. One time offer available upon
            initial registration through our app. At participating locations.
            Terms & Conditions
          </Text>
        </Box>
      </Box>
    </>
  );
}
export default HomepageBottomportion;
