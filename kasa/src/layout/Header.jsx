import React from 'react';
import Logo from '../pictures/logo.png';
import { NavLink } from "react-router-dom";
import '../style/Header.scss'
;
function Headerbar() {
  return(
    <header className='header'>
        <img src={Logo} alt="Logo"/>
        <nav className='nav_list'>
            <NavLink to="/Home" className="home">Accueil</NavLink>
            <NavLink to="/About" className="about">A propos</NavLink>
        </nav>
    </header>

);

  }
  
  export default Headerbar;