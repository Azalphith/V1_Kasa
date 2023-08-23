import React from 'react';
import List from '../data/data.json';
import { useParams } from 'react-router-dom';
import Collapse from '../components/Collapse';
import "../style/MainAbout.scss";
import Rate from '../components/Rate';
import '../style/Accomodation.scss';

export default function Accomodation() {
	const id = useParams();
    const accomodation = List.find(logement => logement.id===id.id);
	
	console.log(id);
	return (
		<div>
			<div className='acc_cover'>
				<img src={accomodation.cover} alt="photographie de l'appartement"/>
			</div>
			<div>
				
				<h1>{accomodation.title}</h1>
				<span>{accomodation.location}</span>
				<span>{accomodation.tags}</span>
			<div>
				<div>{accomodation.host.name}
					<img src={accomodation.host.picture} alt="photographie vendeur"/>
				</div>
				<div className="datas-profil-rate">
                	<Rate stars={accomodation.rating} />
                </div>
			</div>
			</div>
				<div className="accomodation-form">
					<Collapse
						about={true}
						title="Description"
						text={accomodation.description}
					/>
					<Collapse
						about={true}
						title="Equipements"
						text={accomodation.equipments}
					/>
				</div>
		</div>
	);
}
