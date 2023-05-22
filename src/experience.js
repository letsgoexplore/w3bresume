import Navbar from "./Navbar";
import { Box, Grid } from "@chakra-ui/react";
import Block from "./experience_block";
import WalletButton from "./wallet";


const Experience = () => {
    return(
        <div bg='red.50'> 
        <Box >
            <Navbar />
            <Grid templateColumns="repeat(2, 1fr)" gap="6" p="6">
                <Block title={"NFT KOL"} comment={"For the great advocator of NFT"} isClaimed={false} />
                <Block title={"Bewater OG"} comment={"Builder&Contributor of Bewater"} isClaimed={true} />
                <Block title={"Wales"} comment={"To whom possess more than 32 ETH"} isClaimed={true} />
                <Block title={"Blockchain Researcher"} comment={"Creator of the future"} isClaimed={false} />
            </Grid>
        </Box></div>
    )
};

export default Experience