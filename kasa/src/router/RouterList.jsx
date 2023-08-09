import React from 'react';
import {HashRouter, Routes, Route, Navigate} from 'react-router-dom';
import { Home, About } from '../pages/AllPages';



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