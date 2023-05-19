import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Experience from "./experience";
import Job from "./job";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/home' element={<></>} />
                <Route path="/" element={<Experience />} />
                <Route path="/job" element={<Job />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes