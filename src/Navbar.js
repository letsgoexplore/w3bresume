import { Box, Flex, Image, Text, Spacer, Divider, Center} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import mylogo from './asset/mylogo.png'; // 导入你的 logo 图片，需要将路径替换为你的 logo 图片路径
import WalletButton from "./wallet";
import TwitterButton from "./link_account/twitter"
import GithubButton from "./link_account/github"
import React, { useState } from "react";

export default function Navbar({account, setAccount, loggedIn, setLoggedIn, buttonStates, setButtonStates}) {
    const navigate = useNavigate();
    return (
        <Box>
            <Flex align="center" justify="space-between" py={4} px={10} bg="red.100" color="red" style={{ fontFamily: 'Century Gothic', fontWeight: 'bolder'}}>
                <Flex>
                    <Box style={{marginRight: '20px'}} as="button" onClick={() => navigate('/')}>
                        <Image src={mylogo} height={"60px"}></Image>
                    </Box>
                    <Center>
                        <button style={{ marginRight: '20px' }} onClick={() => navigate('/experience')}>
                            <Text fontSize={"2xl"}> Experience </Text>
                        </button>

                        <Divider marginRight={"20px"} orientation="vertical" borderWidth={"2px"} borderColor={"white"} />
                        
                        <button ml={3} onClick={() => navigate('/job')}>
                            <Text fontSize={"2xl"}> Job </Text>
                        </button>
                    </Center>
                </Flex>
                <Spacer />
                <Flex align="center">
                    <Box style={{ marginRight: '20px' }}>
                        <TwitterButton />
                    </Box>
                    <Box style={{ marginRight: '20px' }}>
                        <GithubButton />
                    </Box>
                    <Box style={{ marginRight: '20px' }}>
                        <WalletButton account={account} setAccount={setAccount} loggedIn={loggedIn} setLoggedIn={setLoggedIn} buttonStates={buttonStates} setButtonStates={setButtonStates}/>
                    </Box>               
                </Flex>           
            </Flex>
            <Divider borderWidth={"2px"} />
        </Box>

    );
}
