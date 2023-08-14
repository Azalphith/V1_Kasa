import React from 'react';
import List from '../data/data.json';
import Gallery from '../components/Gallery';
import Banner from '../components/Banner';
import { NavLink } from "react-router-dom"; // Utilisez Link au lieu de NavLink pour éviter la confusion avec la navigation

export default function Home() {
  return (
    <div>
      <Banner />
      <div>
        {List.map((logement) => (
          <NavLink
            key={logement.id}
            to={{
              pathname: "/accomodation",
              state: { selectedLogement: logement } // Transmettez les informations du produit comme state
            }}
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