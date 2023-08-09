import React from 'react';
import '../style/Navbar.scss';
import {NavLink} from 'react-router-dom';


function Navbar() {
  return (
        <nav>
            <ul className='nav_list'>
                <li> 
                   <NavLink to='/Home'>Accueil</NavLink> 
                </li>
                <li>
                    <NavLink to='/About'>A propos</NavLink>
                </li>
            </ul>
        </nav>
  );
}

export default Navbar;
