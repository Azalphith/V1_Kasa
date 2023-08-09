import React from 'react';
import {HashRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';



function Routerbar(){
    return(
        <HashRouter>
            <Routes>
                <Route element={<Navigate replace to='/Home'/>} path='/'/>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/About' element={<About/>}/>
                
            </Routes>
        </HashRouter>
    );
}

export default Routerbar;