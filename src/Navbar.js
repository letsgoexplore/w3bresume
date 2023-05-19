import { Box, Flex, Image, Button, Text, Link, Spacer} from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";
import logo from './logo.svg'; // 导入你的 logo 图片，需要将路径替换为你的 logo 图片路径
import WalletButton from "./wallet";
import TwitterButton from "./link_account/twitter"

export default function Navbar() {
    const walletAddress = "0x1234567890123456789012345678901234567890";
    const navigate = useNavigate();
    return (
        <Flex align="center" justify="space-between" py={4} px={10} bg="teal.500" color="white" style={{ fontFamily: 'Now bold' }}>
            <Flex>
                <button style={{ marginRight: '20px' }} onClick={() => navigate('/')}>
                    <img src="./logo.svg" />                                        
                </button>
                <button style={{ marginRight: '20px' }} onClick={() => navigate('/')}>Experience</button>
                <button ml={3} onClick={() => navigate('/job')}>Job</button>
                <button onClick={() => navigate('https://api.twitter.com/oauth/authorize?oauth_token=7igv71Fz4GILEzmbrNF2exEa4')}>
                    Authorize Twitter
                </button>
            </Flex>
            <Spacer />
            <Flex>
                {/* <MetaMaskButton.Outline size="small">Connect with MetaMask</MetaMaskButton.Outline>
                <Button colorScheme="teal">{walletAddress.slice(0,8)}</Button> */}
                    <TwitterButton />
                    <WalletButton />
            </Flex>
        </Flex>
    );
}
