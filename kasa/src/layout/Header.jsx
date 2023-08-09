import React from 'react';
import Logo from '../pictures/logo.png';
import Navbar from '../components/Navbar';
import '../style/Header.scss';

function Headerbar() {
    return (
          <header className='header'>
            <h1>
                <img src={Logo} alt="kasa, location d'appartements"/>
            </h1>
            <nav>
                <Navbar/>
            </nav>
          </header>
    );
  }
  
  export default Headerbar;