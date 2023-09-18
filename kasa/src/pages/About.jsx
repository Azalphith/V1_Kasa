import React from 'react';
import MainAbout from '../components/MainAbout';
import BannerAbout from '../components/BannerAbout';
import "../style/AboutColl.scss";

export default function About() {
	return (
		<div>
			<BannerAbout/>
			<MainAbout/>
		</div>
	);
}
