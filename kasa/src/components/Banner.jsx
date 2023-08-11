import React from 'react';
import Bann from '../pictures/banner.png';
import '../style/Banner.scss';

function Banner() {
    return(
        <div className='ban'>
            <img  src={Bann} alt="Bannière"/>
            <span className='t1'>Chez vous, partout et ailleurs</span>
        </div>
    );
}

export default Banner;