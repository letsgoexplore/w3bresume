import Navbar from "./navbar.js";
import { Box, Grid } from "@chakra-ui/react";
import Block from "./gallery_block.js";
import React, { useState } from "react";


const Gallery = ({account, setAccount, loggedIn, setLoggedIn, buttonStates, setButtonStates}) => {
    return(
        <div bg='red.400'> 
            <Box>
                <Navbar account={account} setAccount={setAccount} loggedIn={loggedIn} setLoggedIn={setLoggedIn} buttonStates={buttonStates} setButtonStates={setButtonStates} />
                <Grid templateColumns="repeat(2, 1fr)" gap="6" p="6">
                    <Block title={"NFT KOL"} comment={"For the great advocator of NFT"} isClaimed={buttonStates[0]} />
                    <Block title={"Bewater OG"} comment={"Builder&Contributor of Bewater"} isClaimed={buttonStates[1]} />
                    <Block title={"Wales"} comment={"To whom possess more than 32 ETH"} isClaimed={buttonStates[2]} />
                    <Block title={"Twitter KOL"} comment={"Have more than 100 followers"} isClaimed={buttonStates[3]} />
                </Grid>
            </Box>
        </div>
    )
};

export default Gallery