import{ Button, Box, Image} from "@chakra-ui/react"
import GithubIcon from '../asset/github.svg'
import { useEffect, useState } from "react";
import { HTTP_BACKEND_URL,ICON_BOX_SIZE } from "../constants";
    
const LOCAL_STORAGE_TWITTER_ACCESS_TOKEN = "gg"

const GitHubClick = () => {
    let GitHubWindow;
    const [loggedIn, setLoggedIn] = useState(false);
    const [isTokenValid, setIsTokenValid] = useState(false);

    const GithubClick = async () => {
        GitHubWindow = window.open(
            `${HTTP_BACKEND_URL}/auth/github`,
             `_blank`,
             `height=700,width=500`
        )
    }

    useEffect(() => {
        const token = localStorage.getItem(LOCAL_STORAGE_TWITTER_ACCESS_TOKEN);
        if (token) {
          setLoggedIn(true);
          //dispatch({ type: UPDATE_GITHUB_LOGGEDIN, isGithub: true });
        }
      },[]);

    return (
        <Box as="button" onClick={GithubClick}
            bg="white" 
            borderRadius="50%" 
            p={2}
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
        >
          {loggedIn ? (<Image opacity={"0.4"} src={GithubIcon} boxSize={ICON_BOX_SIZE} />): (<Image src={GithubIcon} boxSize={ICON_BOX_SIZE} />)}
        </Box>
    );
}

export default GitHubClick;
    