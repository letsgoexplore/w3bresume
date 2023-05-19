import { Box, Text } from "@chakra-ui/react";
import CVSendBox from "./send_cv";

const JobBlock = ({ companyname, position, email }) => {
  return (
    <Box borderRadius="lg" boxShadow="lg" p={5} bg={"teal.500"} color={"white"}>
      <Text fontSize="3xl" mb={2}>{companyname}</Text>
      <Text mb={4}>{email}</Text>
      <CVSendBox />
    </Box>
  )
}

export default JobBlock;
