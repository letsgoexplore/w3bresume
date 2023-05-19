import Navbar from "./Navbar";
import { Box, Grid } from "@chakra-ui/react";
import Block from "./Block";
import WalletButton from "./wallet";

const Experience = () => {
    const cryptopunkCount=3;
    return(
        <Box>
            <Navbar />
            <Grid templateColumns="repeat(2, 1fr)" gap="6" p="6">
                <Block isClaimed={cryptopunkCount >= 3} />
                <Block isClaimed={cryptopunkCount >= 3} />
                <Block isClaimed={cryptopunkCount >= 3} />
                <Block isClaimed={cryptopunkCount >= 3} />
            </Grid>
        </Box>
    )
};

export default Experience