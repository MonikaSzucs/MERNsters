import React from 'react';
import { Route , Router, Routes, Switch} from "react-router-dom";
import {
    Button,
    Container
} from 'react-bootstrap';

import Login from './Login.js';
import Home from './Home.js';
import About from './About.js';
import NasaPhoto from './NasaPhoto.js';

export default function Main() {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={ <Login/>} />
                <Route path="/Home" element={<Home/>} />
                <Route path="/About" element={ <About/>} />
                <Route path="/nasaphoto" element={ <NasaPhoto/>} />
            </Routes>
        </div>
    )
}
// Main