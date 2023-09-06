import React from 'react';
import Card from '../components/Card';
import { NavLink } from "react-router-dom"; 
import List from '../data/data.json';
import '../style/Gallery.scss';

function Gallery ({id, appart, titre}){
return(
    <div className='flexbox'>
        {List.map((logement) => (
          <NavLink
          key={logement.id}
          to={
            "/accomodation/"+logement.id
            }>
            <Card
              key={logement.id}
              id={logement.id}
              appart={logement.cover}
              titre={logement.title}
            />
          </NavLink>
        ))}
    </div>
);
}

export default Gallery;