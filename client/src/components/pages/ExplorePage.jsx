import React from 'react';
import Header from '../partials/Header';
import Card from '../partials/ExploreCard';

export default function ExplorePage() {
	return (
		<div className='explore-page'>
			<Header />

			<div className='explore-container'>
				<h2 className='explore-title'>Explore</h2>
				<div className='card-container'>
					<Card />
					<Card />
				</div>
			</div>
		</div>
	);
}
