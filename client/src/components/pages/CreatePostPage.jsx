import React from 'react';
import Header from '../partials/LoggedHeader';
import Layout from '../partials/CreatePostLayout';

export default function CreatePostPage() {
    return (
        <div className='newpost-page'>
            <Header />
            <div className='newpost-container'>
                <Layout />
            </div>
        </div>
    );
}
