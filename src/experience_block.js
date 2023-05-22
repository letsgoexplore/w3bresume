import { Box, Text, Button, ChakraProvider } from "@chakra-ui/react";
import ExpButton from "./experience_button_fun";
import theme from "./color/theme"

const Block = ({ title, comment, isClaimed }) => {
  if (!isClaimed) return (
    <Box borderRadius="lg" boxShadow="lg" p={5} bg={"#FB8483"} color={"white"}>
      <Text fontSize="3xl" style={{fontFamily: 'Century Gothic'}} mb={2}>{title}</Text>
      <Text mb={4} style={{fontFamily:'Comic Sans MS'}}>{"\"" + comment + "\""}</Text>
      <ChakraProvider theme={theme}>
        <Button variant="customColor" onClick={ExpButton} style={{fontFamily:"Century Gothic"}}>
          {"Claim"}
        </Button>
      </ChakraProvider>
    </Box>
  )
  else return (
    <Box borderRadius="lg" boxShadow="lg" p={5} bg={"gray.200"} color={"gray.700"}>
      <Text fontSize="3xl" mb={2} style={{fontFamily: 'Century Gothic'}}>{title}</Text>
      <Text mb={4} style={{fontFamily:'Comic Sans MS'}}>{"\"" + comment + "\""}</Text>
      <Button colorScheme={"gray"} onClick={null} style={{fontFamily:"Century Gothic"}}>
        {"Already claimed"}
      </Button>
    </Box>
  )
};

export default Block;
