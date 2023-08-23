import React from "react";
import "../style/404.scss";
import { NavLink } from "react-router-dom";

function Erreur404() {
    return(
        <div className="main_404">
            <h1 >404</h1>
            <span >Oups! La page que vous demandez n'existe pas.</span>
            <p className="nav_404"><NavLink to="/Home">Retourner sur la page d'accueil</NavLink></p>
        </div>
    );
}

export default Erreur404;