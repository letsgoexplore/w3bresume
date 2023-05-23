import { Box, Image} from "@chakra-ui/react"
import twitterIcon from '../asset/twitter.svg'
import { useEffect, useRef, useState } from "react";
import { HTTP_BACKEND_URL, WS_BACKEND_URL, ICON_BOX_SIZE, LOCALSTORAGE_TWITTER_LINKED, LOCALSTORAGE_TWITTER_AVATARURL } from "../constants";

const TwitterButton = () => {
    let twitterWindow;

    const [loggedIn, setLoggedIn] = useState(localStorage.getItem(LOCALSTORAGE_TWITTER_LINKED));
    const [isTokenValid, setIsTokenValid] = useState(false);
    const ws = useRef(null)
    const twitterAvatarUrl = localStorage.getItem(LOCALSTORAGE_TWITTER_AVATARURL)

    const TwitterClick = async (e) => {
        const x = e.clientX
        const y = e.clientY
        twitterWindow = window.open(
            `${HTTP_BACKEND_URL}/auth/twitter`,
             `_blank`,
             `height=700,width=500,left=${x},top=${y}`
        )

        // 有的时候连接不上，重启chrome就解决了，玄学
        ws.current = new WebSocket(WS_BACKEND_URL)
        ws.current.onopen = () => {
            console.log("websocket is connected")
            ws.current.send('hello')
        }

        ws.current.onmessage = (evt) => {
            // parse message data
            const message = JSON.parse(evt.data);
            console.log(evt.data)
            localStorage.setItem(LOCALSTORAGE_TWITTER_LINKED, true)
            localStorage.setItem(LOCALSTORAGE_TWITTER_AVATARURL, message.photos[0].value)
            setLoggedIn(true)
        };

        ws.current.onclose = () => {
            console.log("websocket is closed");
        };

    }

    // useEffect(() => {
    //     ws.current = new WebSocket(WS_BACKEND_URL)
    //     ws.current.onopen = () => {
    //         console.log("websocket is connected")
    //         ws.current.send('hello')
    //     }

    //     ws.current.onmessage = (evt) => {
    //         // parse message data
    //         const message = JSON.parse(evt.data);
    //         if (message.status === 'logged_in') { // adjust this condition based on the actual message format
    //             setLoggedIn(true);
    //         }
    //         console.log(evt.data)
    //         avatarUrlRef.current = message.photos[0].value
    //     };

    //     ws.current.onclose = () => {
    //         console.log("websocket is closed");
    //     };

    //     return ()=> {
    //         ws.current.close()
    //     }
    //   });

    return (
        <Box as="button" onClick={TwitterClick}
            bg="white" 
            borderRadius="50%" 
            p={2}
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
        >
          {loggedIn ? (<Image src={twitterAvatarUrl} boxSize={ICON_BOX_SIZE} />): (<Image src={twitterIcon} boxSize={ICON_BOX_SIZE} />)}
        </Box>
    );
}

export default TwitterButton;
    