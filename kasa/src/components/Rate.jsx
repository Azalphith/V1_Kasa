import React from "react";
import starFull from "../pictures/starfull.png";
import starEmpty from "../pictures/starempty.png";

function Rate({ stars }) {

    // On initialise un tableau des notes possibles
    const ratingScore = [1, 2, 3, 4, 5];

    return (
        <React.Fragment>
            {
                ratingScore.map((element) =>
                    stars >= element ? (
                        <img
                            src={starFull}
                            alt="Etoile pleine"
                            key={element.toString()}
                        />
                    ) : (
                        <img
                            src={starEmpty}
                            alt="Etoile vide"
                            key={element.toString()}
                        />
                    )
                )}
        </React.Fragment>
    )
}

export default Rate;