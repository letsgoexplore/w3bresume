import { Box, Text, Button, ChakraProvider, Image} from "@chakra-ui/react";
import ExpButton from "./experience_button_fun";
import theme_pink from "./color/theme_pink"
import theme_blue from "./color/theme_blue"

import hookIcon from "./asset/hook.png"
import NFTIcon from "./asset/BAYC.png"

const Block = ({blockNum, title, comment, isClaimed, buttonStates, setButtonStates}) => {
  if (!isClaimed) return (
    <Box borderRadius="lg" boxShadow="lg" p={5} bg={"#FB8483"} color={"white"} opacity={0.8}>
      <Text fontSize="3xl" style={{fontFamily: 'Century Gothic'}} mb={2} position="relative" top={0} left={0}>{title}</Text>
      <Text mb={4} style={{fontFamily:'Comic Sans MS'}}>{"\"" + comment + "\""}</Text>
      <ChakraProvider theme={theme_pink}>
        <Button variant="customColor" onClick={ExpButton(blockNum={blockNum},buttonStates={buttonStates},setButtonStates={setButtonStates})} style={{fontFamily:"Century Gothic"}}>
          {"Claim"}
        </Button>
      </ChakraProvider>
      
    </Box>
  )

  else return (
    <Box borderRadius="lg" boxShadow="lg" p={5} bg={"#98c4ba"} color={"white"} >
      <Box display="flex" alignItems="center">
        <Text fontSize="3xl" mb={2} style={{fontFamily: 'Century Gothic'}} mr="10px">{title}</Text>
        <Image src={hookIcon} alt="hook" boxSize={6} objectFit="contain" />
      </Box>
      <Text mb={4} style={{fontFamily:'Comic Sans MS'}}>{"\"" + comment + "\""}</Text>
      <ChakraProvider theme={theme_blue}>
        <Button variant="customColor" onClick={null} style={{fontFamily:"Century Gothic"}}>
          {"Already claimed"}
        </Button>
      </ChakraProvider>
    </Box>
  )
};

export default Block;
