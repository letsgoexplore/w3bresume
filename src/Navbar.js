import { Box, Flex, Image, Button, Text, Link, Spacer} from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";
import mylogo from './asset/mylogo.png'; // 导入你的 logo 图片，需要将路径替换为你的 logo 图片路径
import WalletButton from "./wallet";
import TwitterButton from "./link_account/twitter"
import GithubButton from "./link_account/github"
import React, { useState } from "react";

export default function Navbar({account, setAccount, loggedIn, setLoggedIn, buttonStates, setButtonStates}) {
    const navigate = useNavigate();
    return (
        <Flex align="center" justify="space-between" py={4} px={10} bg="red.100" color="red" style={{ fontFamily: 'Century Gothic', fontWeight: 'bolder'}}>
            <Flex>
                <Box style={{marginRight: '20px'}} as="button" onClick={() => navigate('/')}>
                    <Image src={mylogo} height={"60px"}></Image>
                </Box>
                <button style={{ marginRight: '20px' }} onClick={() => navigate('/')}>Experience</button>
                <button ml={3} onClick={() => navigate('/job')}>Job</button>
            </Flex>
            <Spacer />
            <Flex>
                {/* <MetaMaskButton.Outline size="small">Connect with MetaMask</MetaMaskButton.Outline>
                <Button colorScheme="teal">{walletAddress.slice(0,8)}</Button> */}
                <Flex style={{ marginRight: '20px' }}>
                    <TwitterButton />
                </Flex>
                <Flex style={{ marginRight: '20px' }}>
                    <GithubButton />
                </Flex>
                <Flex style={{ marginRight: '20px' }}>
                    <WalletButton account={account} setAccount={setAccount} loggedIn={loggedIn} setLoggedIn={setLoggedIn} buttonStates={buttonStates} setButtonStates={setButtonStates}/>
                </Flex>               
            </Flex>
        </Flex>
    );
}
