import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import experience from "./experience";
import job from "./job";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<experience />} />
                <Route path="/job" element={<job />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes