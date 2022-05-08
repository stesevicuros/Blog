import React from 'react';

export default function LoginLayout() {
    return (
        <div>
            <h1 className='title'>SIGN IN TO BLOGME</h1>
            <form className='login-form'>
                <div className='login-form-items'>
                    <i class='fa-solid fa-user icons'></i>
                    <input
                        required
                        autoComplete='off'
                        type='text'
                        name='username'
                        className='login-input'
                        placeholder='Username'
                    ></input>
                </div>
                <div className='login-form-items'>
                    <i class='fa-solid fa-key icons'></i>
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
                <p>Don't have an account?</p>
                <a>Create one now!</a>
            </form>
        </div>
    );
}
