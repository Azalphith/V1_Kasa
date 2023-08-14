import React from 'react';
import '../style/Gallery.scss';

function Gallery ({id, appart, titre}){
return(
    <div id={id} className='gallery'>
        <img src={appart} alt="Vu de l'appartement" className='gallery_item'/>
        <div className='gallery_title'>{titre}</div>
    </div>
);
}

export default Gallery;