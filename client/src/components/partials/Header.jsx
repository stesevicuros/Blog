import React from 'react';

export default function Header() {
    return (
        <>
            <div className='header'>
                <h4 className='logo'>BlogMe</h4>
                <div className='buttons'>
                    <div className='explore'>
                        <a>Explore</a>
                    </div>
                    <div className='explore'>
                        <a>Login</a>
                    </div>
                    <div className='explore'>
                        <a>Register</a>
                    </div>
                </div>
            </div>
            <div></div>
            <div className='border-bottom'></div>
        </>
    );
}
