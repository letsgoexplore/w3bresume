import { Box, Text, Image, Flex } from "@chakra-ui/react";
import JobBlockButton from "./job_block_button";
import hookIcon from "./asset/hook.png"

const JobBlock = ({ companyname, position, email, sbtRequired, buttonStates }) => {
  var isEligible = false;
  for (let i = 0; i < sbtRequired.length; i++){
    isEligible = true;
    if (buttonStates[sbtRequired[i]] === 0){
      isEligible = false;
      break;
    }
  }
  if (!isEligible) return (
 
    <Box borderRadius="lg" boxShadow="lg" p={5} bg={"#FB8483"} color={"white"}>
      <Flex><Text fontSize="3xl" mb={2} style={{fontFamily: 'Century Gothic'}}>{companyname}</Text></Flex>
      <Flex><Text mb={4} style={{fontFamily:'Comic Sans MS'}}>{email}</Text></Flex>
      <Flex><JobBlockButton companyname={companyname} sbtRequired={sbtRequired} buttonStates={buttonStates} isEligible={isEligible}/></Flex>
    </Box>

  )
  else return (

    <Box borderRadius="lg" boxShadow="lg" p={5} bg={"#98c4ba"} color={"white"} >
      <Box display="flex" alignItems="center">
        <Flex><Text fontSize="3xl" mb={2} style={{fontFamily: 'Century Gothic'}} mr={2}>{companyname}</Text></Flex>
        <Flex><Image src={hookIcon} alt="hook" boxSize={6} objectFit="contain" /></Flex>
      </Box>
      <Flex><Text mb={4} style={{fontFamily:'Comic Sans MS'}}>{email}</Text></Flex>
      <Flex><JobBlockButton companyname={companyname} sbtRequired={sbtRequired} buttonStates={buttonStates} isEligible={isEligible}/></Flex>
    </Box>

  )
}

export default JobBlock;
