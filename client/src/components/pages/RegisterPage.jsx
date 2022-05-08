import React from 'react';
import Header from '../partials/Header';
import Layout from '../partials/RegisterLayout';

export default function RegisterPage() {
    return (
        <div className='register-page'>
            <Header />
            <div className='register-container'>
                <Layout />
            </div>
        </div>
    );
}
