import { Box, Text, Button } from "@chakra-ui/react";

const Block = ({ isClaimed, handleClaim }) => {
  return (
    <Box borderRadius="lg" boxShadow="lg" p={5} bg={isClaimed ? "gray.200" : "teal.500"} color={isClaimed ? "gray.700" : "white"}>
      <Text fontSize="3xl" mb={2}>NFT</Text>
      <Text mb={4}>hahahahahaha</Text>
      <Button colorScheme={isClaimed ? "gray" : "teal"} onClick={handleClaim}>
        {isClaimed ? "Already claimed" : "Claim"}
      </Button>
    </Box>
  );
};

export default Block;
