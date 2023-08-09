import React from 'react';
import { Banner } from '../components/AllComponents';
import Headerbar from '../layout/Header';
import List from '../data/data.json';
import ListItems from '../components/Items';

export default function Home() {
	return (
		<div>
			<Headerbar/>
			<Banner/>
			<div>
				{List.map((logement)=> 
				
					<ListItems  key={logement.id} id={logement.id} appart={logement.cover} titre={logement.title}/>
				
				)}
			</div>
		</div>
	)
}