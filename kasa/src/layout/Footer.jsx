import React from "react";
import Logo from "../pictures/logo.png";

function Footer() {
    return(
        <footer>
            <div >
                <img src={Logo} alt="Logo" />
                <p>&copy; 2020 Kasa. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;