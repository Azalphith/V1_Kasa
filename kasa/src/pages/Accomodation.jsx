import React from 'react';
import List from '../data/data.json';
import { useParams } from 'react-router-dom';
import Collapse from '../components/Collapse';
import Rate from '../components/Rate';
import '../style/Accomodation.scss';
import Carousel from '../components/Carousel';
import Error404 from "./404";
import "../style/HomeColl.scss";

export default function Accomodation() {
	const id = useParams();
	
    const accomodation = List.find(logement => logement.id===id.id);
	if(accomodation === undefined){
		return <Error404 />
	}

	const host = accomodation.host;
	const fullName = host.name;
	const nameParts = fullName.split(' ');
	const firstName = nameParts[0];
	const lastName = nameParts.slice(1).join(' ');

	const tagsAcc = accomodation.tags.map((tags, index) => {
		return <div className='tags' key={index}>{tags}</div>
	});
	const equipList = accomodation.equipments.map((equipments, index) => {
		return <div className='equipments' key={index}>{equipments}</div> 
	});
	
	return (
		<div>
			<div>
				<Carousel imageSlider={accomodation.pictures}/>
			</div>
			<div className="accomodation">
				<div className="accomodation_content">
					<div className="accomodation_content_infos">
						<h1>{accomodation.title}</h1>
						<p>{accomodation.location}</p>
						<div>{tagsAcc}</div>
					</div>
					<div className="accomodation_content_host">
						<div className='accomodation_content_host_user'>
							<div className='accomodation_content_host_name'>
								<span className="first-name">{firstName}</span>
          						<span className="last-name">{lastName}</span>
							</div>
							<img src={accomodation.host.picture} alt="photographie vendeur" className='acc_host'/>
						</div>
						<div className="accomodation_content_host_stars">
							<Rate stars={accomodation.rating}/>
						</div>
					</div>
				</div>
				<div className="acc_collapse">
					<div>
						<Collapse
							about={true}
							title="Description"
							text={accomodation.description} 
							
						/>
					</div>
					<div>
						<Collapse
							about={true}
							title="Equipements"
							text={equipList}
							
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
