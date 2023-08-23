import Ban from '../pictures/banner-about.png';
import '../style/BannerAbout.scss';

function BannerAbout() {
    return(
        <div >
            <img  src={Ban} alt="Seconde bannière" className='banner-about'/>
        </div>
    );
}

export default BannerAbout;