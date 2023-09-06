import Ban from '../pictures/banner-about.png';
import '../style/Banner.scss';

function BannerAbout() {
    return(
        <div className='ban'>
            <img  src={Ban} alt="Seconde bannière" className='banner-about'/>
        </div>
    );
}

export default BannerAbout;