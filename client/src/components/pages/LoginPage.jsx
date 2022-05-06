import React from 'react';
import Header from '../partials/Header';
import Layout from '../partials/LoginLayout';

export default function LoginPage() {
    return (
        <div className='login-page'>
            <Header />
            <div className='login-container'>
                <Layout />
            </div>
        </div>
    );
}
