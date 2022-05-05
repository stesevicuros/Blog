import React from 'react';
import Header from '../partials/Header';
import Card from '../partials/Card';

export default function ExplorePage() {
    return (
        <div className='explore-page'>
            <Header />

            <div className='explore-container'>
                <h2 className='explore-title'>Explore</h2>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}
