import { Box, Flex, Image, Button, Text, Link} from "@chakra-ui/react";
import logo from './logo.svg'; // 导入你的 logo 图片，需要将路径替换为你的 logo 图片路径

const Navbar = ({ isConnected, address }) => {
    address = "0x1234567890123456789012345678901234567890";
  return (
    <Flex align="center" justify="space-between" py={4} px={10} bg="teal.500" color="white">
      <Flex align="center">
        <Link to="/App">
            <Image src={logo} boxSize="50px" />
        </Link>
        <Link to="/App">
            <Text>Experience</Text>
        </Link>
        <Link to="/job">  
            <Text ml={3}>Job</Text>
        </Link>
      </Flex>
      <Flex ml="auto">
        <Button colorScheme="teal">{address.slice(0,8)}</Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;

