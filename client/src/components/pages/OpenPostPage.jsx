import React from 'react';
import Header from '../partials/Header';
import Layout from '../partials/OpenPostLayout';

export default function OpenPostPage() {
	return (
		<div className='open-post-page'>
			<Header />
			<div className='open-post-container'>
				<Layout />
			</div>
		</div>
	);
}
