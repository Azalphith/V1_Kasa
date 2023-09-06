import React from 'react';
import Bann from '../pictures/banner.png';
import '../style/Banner.scss';

function Banner() {
    return(
        <div className='ban'>
            <img  src={Bann} alt="Bannière" className='banner_image'/>
            <span className='title_ban'>Chez vous, 
            partout et ailleurs</span>
        </div>
    );
}

export default Banner;