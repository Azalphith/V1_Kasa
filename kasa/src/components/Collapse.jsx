import React from 'react';
import { useState } from "react";
import arrow_up from '../pictures/arrow.png';



function Collapse({ title, text, about }) {

    // Variable d'état initialisée à false
    const [isActive, setActive] = useState(false);

    const handleToggle = (event) => {
        setActive(!isActive);
    };

    return (
        // On gère la classe en fonction de si on a cliqué dessus ou non
        <div className={`${about ? "about-collapse" : "collapse"} ${isActive && "active"}`} >
            <div className="about-collapse-title">
                <p>{title}</p>
                <img src={arrow_up} alt="Flèche vers le bas" className='arrowMoove' onClick={handleToggle}/>
            </div>
            <div className="about-collapse-text">{text}</div>
        </div>
    );
}

export default Collapse;