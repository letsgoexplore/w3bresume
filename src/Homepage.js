import Navbar from "./navbar";
import { Box, Flex, Heading } from "@chakra-ui/react";
import HomepageImg from "./asset/homepage.png"

export default function Homepage () {
    return (
        <Box>
          <Navbar />
    
          <Flex align="center" justify="center" bgImage={`url(${HomepageImg})`} h="600px" bgSize="cover" bgPosition="center">
            {/* <Text color="Black" fontSize="3xl">欢迎来到我的网站</Text> */}
            <Box textAlign="center" py={8}>
                <Heading as="h1" size="3xl">W3bResumes: <span style={{color: 'blue'}}>Empowering</span></Heading>
                <Heading as="h1" size="3xl">Your Professional Journey</Heading>
                <Box h={4}> { }</Box>
                <Heading as="h2" size="lg">Seize Opportunities with Web3 Resumes</Heading>
            </Box>
          </Flex>
        </Box>
      );
}