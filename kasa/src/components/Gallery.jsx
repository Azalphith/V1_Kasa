import React from 'react';
import '../style/Gallery.scss';

function Gallery ({id, appart, titre}){
return(
    <div id={id} className='gallery_content'>
        <img src={appart} alt="Vu de l'appartement" className='gallery_item'/>
        <span className='gallery_title'>{titre}</span>
    </div>
);
}

export default Gallery;