import React from 'react';
import Carousel from '../components/Carousel';
import List from '../data/data.json';
import { useParams } from 'react-router-dom';


export default function Accomodation() {
	const id = useParams();
    const accomodation = List.find(logement => logement.id===id.id);
	console.log(id);
	return (
        
		<div>
			<div>
				<img src="/" alt="" />
				<span>
					{accomodation.id}
				</span>

				<Carousel>Votre logement</Carousel>
			</div>
		</div>
	);
}
