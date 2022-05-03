import React from 'react';
import Header from '../partials/Header';
import Card from '../partials/Card';

export default function ExplorePage() {
	return (
		<div className='explore-container'>
			<Header />
			<div className='card-container'>
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
}
