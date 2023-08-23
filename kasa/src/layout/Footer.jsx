import React from "react";
import Logo from "../pictures/logo-footer.png";
import "../style/Footer.scss";


function Footer() {
    return(
        <footer>
            <div className="foot">
                <img src={Logo} alt="Logo" className="fimg"/>
                <p className="ftext">&copy; 2020 Kasa. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;