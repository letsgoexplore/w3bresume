import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from "./gallery";
import Job from "./job";
import Homepage from "./Homepage";

const AppRoutes = () => {
    const [account, setAccount] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [buttonStates, setButtonStates] = useState([0, 0, 0, 0]);
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Homepage account={account} setAccount={setAccount} loggedIn={loggedIn} setLoggedIn={setLoggedIn} buttonStates={buttonStates} setButtonStates={setButtonStates}/>} />
                <Route path="/gallery" element={<Gallery account={account} setAccount={setAccount} loggedIn={loggedIn} setLoggedIn={setLoggedIn} buttonStates={buttonStates} setButtonStates={setButtonStates}/>} />
                <Route path="/job" element={<Job account={account} setAccount={setAccount} loggedIn={loggedIn} setLoggedIn={setLoggedIn} buttonStates={buttonStates} setButtonStates={setButtonStates}/>} />
            </Routes>
        </Router>
    )
}

export default AppRoutes

