import React from 'react';
import '../style/Card.scss';

function Card ({id, appart, titre}){
    return(
        <div id={id} className='gallery_content'>
            <img src={appart} alt="Vu de l'appartement" className='gallery_item'/>
            <h3 className='gallery_title'>{titre}</h3>
        </div>
    );
    }

export default Card;