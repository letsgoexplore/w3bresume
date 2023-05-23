import { Box, Image} from "@chakra-ui/react"

const badgeIcon = [
    require('./asset/BAYC.svg').default,
    require('./asset/bewater.svg').default,
    require('./asset/ethereum.svg').default,
    require('./asset/research.svg').default
  ];

const JobBlockButtonBadge = ({sbtRequired, buttonStates}) => {
    if (!Array.isArray(sbtRequired)) {
        console.error('sbtRequired must be an array');
        return null;
    }
    return(
        <Box> 
            {sbtRequired.map((value, index) => {
                return (
                    <Box
                        key={value}
                        bg="white" 
                        borderRadius="30%" 
                        p={2}
                        display="inline-flex"
                        alignItems="center"
                        justifyContent="center"                        
                    >
                      {(buttonStates[value] === 1) ? (<Image src={badgeIcon[value]} boxSize="50px" objectFit="contain"/>): 
                      (<Image src={badgeIcon[value]} opacity={"0.2"} boxSize="50px" filter="grayscale(100%)" objectFit="contain"/>)}
                    </Box>
                );
            })}
        </Box>
    )
}

export default JobBlockButtonBadge