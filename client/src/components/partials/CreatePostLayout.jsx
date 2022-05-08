import React from 'react';

export default function CreatePostLayout() {
    return (
        <div>
            <h3 className='page-title'>Create New Post</h3>

            <form>
                <div className='create-post-container'>
                    <label className='post-title'>Title:</label>
                    <input
                        type='text'
                        autoComplete='off'
                        name='title'
                        className='new-post-title'
                        placeholder='Post title'
                    ></input>
                    <label className='post-title'>Content:</label>
                    <textarea
                        className='new-post-content'
                        type='text'
                        autoComplete='off'
                        placeholder='What do you want to write about?'
                    />
                </div>
                <div className='buttons'>
                    <button className='post-button'>POST</button>
                    <button className='discard-button'>DISCARD</button>
                </div>
            </form>
        </div>
    );
}
