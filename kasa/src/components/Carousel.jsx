import React from 'react';


function Carousel ({id, appart, titre, descript, first, rat, geo, tag, equipment}){
return(

    <div id={id} className='gallery'>
        <img src={appart} alt="Vu de l'appartement" className='gallery_item'/>
        <div className='gallery_title'>{titre}</div>
        <div>{descript}</div>
        <div>{first}</div>
        <div>{rat}</div>
        <div>{geo}</div>
        <div>{tag}</div>
        <div>{equipment}</div>
    </div>
);
}

export default Carousel;