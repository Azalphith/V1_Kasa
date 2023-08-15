import React from 'react';
import List from '../data/data.json';
import Gallery from '../components/Gallery';
import Banner from '../components/Banner';
import { NavLink } from "react-router-dom"; 

export default function Home() {
  return (
    <div>
      <Banner />
      <div className='flexbox'>
        {List.map((logement) => (
          <NavLink
          key={logement.id}
          to={
            "/accomodation/"+logement.id
              //pathname: "/accomodation/"+{logement.id}
            }
          >
            <Gallery
              key={logement.id}
              id={logement.id}
              appart={logement.cover}
              titre={logement.title}
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
}