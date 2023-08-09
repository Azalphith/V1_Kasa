import React from 'react';


function ListItems({id, appart, titre}){
return(
    <div id={id}>
        <img src={appart} alt="Vu de l'appartement"/>
        <div>{titre}</div>
    </div>
);
}

export default ListItems;