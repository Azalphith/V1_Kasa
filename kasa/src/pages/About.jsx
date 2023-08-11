import React from 'react';
import Banner from '../components/Banner';
import ImageApropos from '../pictures/banner.png'


function About() {
	return (
		<div>
			<Banner image={ImageApropos} titre=""/>
			<div>
				yo je suis dans a propos !
			</div>
		</div>
	);
}
export default About;