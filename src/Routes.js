import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage';

function Routess(){
    return(
        <Router>
            <Routes>
            <Route exact path="/" element={<Homepage/>} />
            
            </Routes>
        </Router>
    )
}

export default Routess;