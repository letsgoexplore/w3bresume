import Navbar from "./navbar";
import { Box, Grid } from "@chakra-ui/react";
import Block from "./experience_block";
import React, { useState } from "react";


const Experience = ({account, setAccount, loggedIn, setLoggedIn, buttonStates, setButtonStates}) => {
    return(
        <div bg='red.400'> 
            <Box>
                <Navbar account={account} setAccount={setAccount} loggedIn={loggedIn} setLoggedIn={setLoggedIn} buttonStates={buttonStates} setButtonStates={setButtonStates} />
                <Grid templateColumns="repeat(2, 1fr)" gap="6" p="6">
                    <Block title={"NFT KOL"} comment={"For the great advocator of NFT"} isClaimed={buttonStates[0]} />
                    <Block title={"Bewater OG"} comment={"Builder&Contributor of Bewater"} isClaimed={buttonStates[1]} />
                    <Block title={"Wales"} comment={"To whom possess more than 32 ETH"} isClaimed={buttonStates[2]} />
                    <Block title={"Blockchain Researcher"} comment={"Creator of the future"} isClaimed={buttonStates[3]} />
                </Grid>
            </Box>
        </div>
    )
};

export default Experience