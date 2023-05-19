import{ Button, Box, Image} from "@chakra-ui/react"
import GithubIcon from '../asset/github.svg'
import { useEffect, useState } from "react";
import { BACKEND_BASE_URL } from "../constants";
    
const LOCAL_STORAGE_TWITTER_ACCESS_TOKEN = "gg"

const GitHubClick = () => {
    let GitHubWindow;
    const [loggedIn, setLoggedIn] = useState(false);
    const [isTokenValid, setIsTokenValid] = useState(false);

    const GithubClick = async () => {
        GitHubWindow = window.open(
            `${BACKEND_BASE_URL}/auth/github`,
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
        <Box as="button" onClick={GithubClick}
            bg="white" 
            borderRadius="50%" 
            p={2}
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
        >
          {loggedIn ? (<Image opacity={"0.4"} src={GithubIcon} boxSize="50px" />): (<Image src={GithubIcon} boxSize="50px" />)}
        </Box>
    );
}

export default GitHubClick;
    