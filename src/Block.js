import { Box, Text, Button } from "@chakra-ui/react";
import ExpButton from "./experience_button_fun";

const Block = ({ title, comment,isClaimed }) => {
  if (!isClaimed) return (
    <Box borderRadius="lg" boxShadow="lg" p={5} bg={isClaimed ? "gray.200" : "teal.500"} color={isClaimed ? "gray.700" : "white"}>
      <Text fontSize="3xl" mb={2}>{title}</Text>
      <Text mb={4}>{comment}</Text>
      <Button colorScheme={isClaimed ? "gray" : "teal"} onClick={ExpButton}>
        {isClaimed ? "Already claimed" : "Claim"}
      </Button>
    </Box>
  )
  else return (
    <Box borderRadius="lg" boxShadow="lg" p={5} bg={isClaimed ? "gray.200" : "teal.500"} color={isClaimed ? "gray.700" : "white"}>
      <Text fontSize="3xl" mb={2}>{title}</Text>
      <Text mb={4}>{comment}</Text>
      <Button colorScheme={isClaimed ? "gray" : "teal"} onClick={null}>
        {isClaimed ? "Already claimed" : "Claim"}
      </Button>
    </Box>
  )
};

export default Block;
