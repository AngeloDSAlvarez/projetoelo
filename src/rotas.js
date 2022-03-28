import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Leads from './pages/Leads'


export default () => {
    return(
        <Routes>
            
            <Route exact path="/" element={<Home />}/>

            <Route exact path="/leads" element={<Leads />}/>



        </Routes>
    );
}

