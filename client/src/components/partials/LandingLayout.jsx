import React from 'react';
import axios from 'axios';
export default function LandingLayout() {
	async function getRoute() {
		const data = await axios
			.get('http://localhost:3001/')
			.then(response => console.log(response.data));
	}
	return (
		<div className='layout'>
			<div className='image-tint'></div>
			<img
				alt='background-img-nature'
				className='background-image'
				src='https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/TNC_PC2021_450b6776aee8195158c113bac7b342a0-original.jpg?crop=0,26,4000,2200&wid=4000&hei=2200&scl=1.0'
			/>
			<div className='title'>SHARE YOUR STORIES</div>
			<div className='lorem'>
				Lorem ipsum dolor sit amet, consetetur
				sadipscing elitr, sed diam nonumy eirmod
				tempor invidunt ut labore et dolore magna
				aliquyam erat, sed diam voluptua. At vero
				eos et accusam.
			</div>
			<div className='buttons'>
				<button
					className='sign-up-button'
					onClick={() => getRoute()}>
					SIGN UP NOW
				</button>
				<button className='explore-button'>
					EXPLORE
				</button>
			</div>
		</div>
	);
}
