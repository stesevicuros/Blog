import React from 'react';

export default function LoginLayout() {
    return (
        <div>
            <h1 className='title'>SIGN IN TO BLOGME</h1>
            <form>
                <div className='login-forms'>
                    <input
                        required
                        autoComplete='off'
                        type='text'
                        name='username'
                        className='login-input'
                        placeholder='Username'
                    ></input>
                </div>
                <div className='login-forms'>
                    <input
                        required
                        autoComplete='off'
                        type='password'
                        name='password'
                        className='login-input'
                        placeholder='Password'
                    ></input>
                </div>
                <button className='sign-in-button'>SIGN IN</button>
            </form>
        </div>
    );
}
