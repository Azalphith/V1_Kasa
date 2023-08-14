import React from 'react';
import {HashRouter, Routes, Route, Navigate} from 'react-router-dom';
import Layout from "../layout/Layout";
import Erreur404 from "../pages/404";
import Home from "../pages/Home";
import About from "../pages/About";
import Accomodation from "../pages/Accomodation";



function Routerbar(){
    return(
        <HashRouter>
            <Layout>
            <Routes>
                <Route element={<Navigate replace to='/Home'/>} path='/'/>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Accomodation' element={<Accomodation/>}/>
                <Route path="*" element={<Erreur404 />}/>
            </Routes>
            </Layout>
        </HashRouter>
    );
}

export default Routerbar;