import React from 'react';
import List from '../data/data.json';
import ListItems from '../components/Gallery';
import Banner from '../components/Banner';
import { NavLink } from "react-router-dom";

export default function Home() {
	return (
		<div>
		
			<Banner/>
			<div>
				{List.map((logement)=> 
				<NavLink key={logement.id} to={"/logement/"+logement.id+"/#"}>
					<ListItems  key={logement.id} id={logement.id} appart={logement.cover} titre={logement.title}/>
				
					</NavLink>)}
			</div>
		</div>
	);
}