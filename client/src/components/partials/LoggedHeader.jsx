import React from 'react';

export default function LoggedHeader() {
    return (
        <>
            <div className='logged-header'>
                <h4 className='logo'>BlogMe</h4>
                <div className='buttons'>
                    <div className='explore'>
                        <a>Explore</a>
                    </div>
                    <div className='explore'>
                        <a>New Post</a>
                    </div>
                    <div className='explore'>
                        <a>Logout</a>
                    </div>
                </div>
            </div>
            <div className='border-bottom-logged-header'></div>
        </>
    );
}
