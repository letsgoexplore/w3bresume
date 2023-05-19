import Navbar from "./Navbar";
import { Box, Grid } from "@chakra-ui/react";
import Block from "./Block";
import WalletButton from "./wallet";


const Experience = () => {
    return(
        <Box>
            <Navbar />
            <Grid templateColumns="repeat(2, 1fr)" gap="6" p="6">
                <Block title={"NFT KOL"} comment={"To whom the great advocator of NFT"} isClaimed={false} />
                <Block title={"Bewater OG"} comment={"Builder&Contributor of Bewater"} isClaimed={true} />
                <Block title={"Wales"} comment={"To whom possess more than 32 ETH"} isClaimed={true} />
                <Block title={"Blockchain Researcher"} comment={"Creator of the future"} isClaimed={false} />
            </Grid>
        </Box>
    )
};

export default Experience