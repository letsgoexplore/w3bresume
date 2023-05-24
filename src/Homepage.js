import Navbar from "./navbar.js";
import { Box, Flex, Heading } from "@chakra-ui/react";
import HomepageImg1 from "./asset/homepage1.png"
import HomepageImg2 from "./asset/homepage2.png"
import HomepageImg3 from "./asset/homepage3.png"

export default function Homepage ({account, setAccount, loggedIn, setLoggedIn, buttonStates, setButtonStates}) {
  return(
    <Box bg="#fdefef">
        <Navbar account={account} setAccount={setAccount} loggedIn={loggedIn} setLoggedIn={setLoggedIn} buttonStates={buttonStates} setButtonStates={setButtonStates} />
        {/* <Box textAlign="center" py={8} color={"red.500"}>
                <Heading as="h1" size="3xl"><span style={{fontFamily:"29LT Baseet"}}> W3BResumes:</span> <span style={{color: "#0292b7"}}>Empowering</span></Heading>
          <Flex align="center" justify="center" h="600px" bgSize="cover" bgPosition="center">
            <Box textAlign="center" py={8}>
                <Heading as="h1" size="3xl">W3bResumes: <span style={{color: "#FB8483"}}>Empowering</span></Heading>
                <Heading as="h1" size="3xl">Your Professional Journey</Heading>
                <Box h={4}> { }</Box>
                <Heading as="h2" size="lg" style={{fontFamily:'Century Gothic'}} color="red.600">Seize Opportunities with Web3 Resumes</Heading>
            </Box> 
          </Flex> */}
        <Flex align="center" justify="center" bgImage={`url(${HomepageImg1})`} h="600px" bgSize="cover" bgPosition="center"></Flex>
        <Flex align="center" justify="center" bgImage={`url(${HomepageImg2})`} h="600px" bgSize="cover" bgPosition="center"></Flex>
        <Flex align="center" justify="center" bgImage={`url(${HomepageImg3})`} h="600px" bgSize="cover" bgPosition="center"></Flex>
    </Box>
  )
}
