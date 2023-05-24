import { Box, Text, Image, Flex, VStack } from "@chakra-ui/react";
import JobBlockButton from "./job_block_button";
import hookIcon from "./asset/hook.png"

const JobBlock = ({ companyname, position, email, sbtRequired, buttonStates, salary }) => {
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
      <Flex justifyContent={"space-between"}>
        <Text fontSize="3xl" mb={2} style={{fontFamily: 'Century Gothic'}}>{companyname}</Text>
        <Text fontSize="3xl" mb={2} style={{fontFamily: 'Century Gothic'}}>{salary}</Text>
      </Flex>
      <VStack align={"start"}>
        {email.split('\n').map((item, i) => (
          <Text key={i} mb={4} style={{fontFamily:'Comic Sans MS', whiteSpace: 'pre-line'}}>
            {item}
          </Text>
        ))}
      </VStack>
      <Flex><JobBlockButton companyname={companyname} sbtRequired={sbtRequired} buttonStates={buttonStates} isEligible={isEligible}/></Flex>
    </Box>
  )
  else return (

    <Box borderRadius="lg" boxShadow="lg" p={5} bg={"#98c4ba"} color={"white"} >
      <Flex justifyContent={"space-between"} display="flex" alignItems="center">
        <Box>
          <Text fontSize="3xl" mb={2} style={{fontFamily: 'Century Gothic'}} mr={2}>{companyname}</Text>
          <Image src={hookIcon} alt="hook" boxSize={6} objectFit="contain" />
        </Box>
        <Flex>
          <Text fontSize="3xl" mb={2} style={{fontFamily: 'Century Gothic'}}>{salary}</Text>
        </Flex>
      </Flex>
      <VStack align={"start"}>
        {email.split('\n').map((item, i) => (
          <Text key={i} mb={4} style={{fontFamily:'Comic Sans MS', whiteSpace: 'pre-line'}}>
            {item}
          </Text>
        ))}
      </VStack>      
      <Flex><JobBlockButton companyname={companyname} sbtRequired={sbtRequired} buttonStates={buttonStates} isEligible={isEligible}/></Flex>
    </Box>

  )
}

export default JobBlock;
