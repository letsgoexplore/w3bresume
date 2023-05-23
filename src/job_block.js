import { Box, Text, Image } from "@chakra-ui/react";
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
    <Box borderRadius="lg" boxShadow="lg" p={5} bg={"#FB8483"} color={"white"} >
      <Text fontSize="3xl" mb={2} style={{fontFamily: 'Century Gothic'}}>{companyname}</Text>
      <Text mb={4} style={{fontFamily:'Comic Sans MS'}}>{email}</Text>
      <JobBlockButton companyname={companyname} sbtRequired={sbtRequired} buttonStates={buttonStates} isEligible={isEligible}/>
    </Box>
  )
  else return (
    <Box borderRadius="lg" boxShadow="lg" p={5} bg={"#FB8483"} color={"white"} >
      <Box display="flex" alignItems="center">
        <Text fontSize="3xl" mb={2} style={{fontFamily: 'Century Gothic'}} mr={2}>{companyname}</Text>
        <Image src={hookIcon} alt="hook" boxSize={6} objectFit="contain" />
      </Box>
      <Text mb={4} style={{fontFamily:'Comic Sans MS'}}>{email}</Text>
      <JobBlockButton companyname={companyname} sbtRequired={sbtRequired} buttonStates={buttonStates} isEligible={isEligible}/>
    </Box>
  )
}

export default JobBlock;
