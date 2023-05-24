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
                    <Block blockNum={0} title={"NFT KOL"} comment={"For the great advocator of NFT"} isClaimed={buttonStates[0]} buttonStates={buttonStates} setButtonStates={setButtonStates} />
                    <Block blockNum={1} title={"Bewater OG"} comment={"Builder&Contributor of Bewater"} isClaimed={buttonStates[1]} buttonStates={buttonStates} setButtonStates={setButtonStates} />
                    <Block blockNum={2} title={"Wales"} comment={"To whom possess more than 1 ETH"} isClaimed={buttonStates[2]} buttonStates={buttonStates} setButtonStates={setButtonStates} />
                    <Block blockNum={3}  title={"Twitter KOL"} comment={"Have more than 100 followers"} isClaimed={buttonStates[3]} buttonStates={buttonStates} setButtonStates={setButtonStates} />
                </Grid>
            </Box>
        </div>
    )
};

export default Gallery