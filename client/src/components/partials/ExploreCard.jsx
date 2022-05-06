import React from 'react';

export default function Card() {
    return (
        <div className='card'>
            <div>
                <h4 className='title'>Imam veliki kurac</h4>
            </div>
            <div>
                <p className='author'>by:Urke</p>
            </div>
            <div>
                <div className='comment'>
                    <i class='fa-solid fa-message'></i>
                    <span> </span>
                    Comments
                </div>
            </div>
        </div>
    );
}
