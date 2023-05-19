import{Button, Box, Image} from "@chakra-ui/react"
import twitterIcon from '../asset/twitter.svg'
import { useEffect, useState } from "react";

    
const LOCAL_STORAGE_TWITTER_ACCESS_TOKEN = "tt"
const BACKEND_BASE_URL = "http://127.0.0.1:3111"

const TwitterClick = () => {
    let twitterWindow;
    const [loggedIn, setLoggedIn] = useState(false);
    const [isTokenValid, setIsTokenValid] = useState(false);

    const TwitterClick = async () => {
        twitterWindow = window.open(
            `${BACKEND_BASE_URL}/auth/twitter`,
             `_blank`,
             `height=500,width=800`
        )
    }

    useEffect(() => {
        const token = localStorage.getItem(LOCAL_STORAGE_TWITTER_ACCESS_TOKEN);
        if (token) {
          setLoggedIn(true);
          //dispatch({ type: UPDATE_GITHUB_LOGGEDIN, isGithub: true });
        }
      });

    return (
        <Box as="button" onClick={TwitterClick}
            bg="white" 
            borderRadius="50%" 
            p={2}
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
        >
          {loggedIn ? (<Image opacity={"0.4"} src={twitterIcon} boxSize="50px" />): (<Image src={twitterIcon} boxSize="50px" />)}
        </Box>
    );
}

export default TwitterClick;
    