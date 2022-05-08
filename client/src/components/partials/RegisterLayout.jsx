import React from 'react';

export default function RegisterLayout() {
    return (
        <div>
            <div>
                <h1 className='title'>WELCOME TO BLOGME</h1>
                <form className='register-form'>
                    <div className='register-form-items'>
                        <i class='fa-solid fa-user icons'></i>
                        <input
                            required
                            autoComplete='off'
                            type='text'
                            name='username'
                            className='register-input'
                            placeholder='Username'
                        ></input>
                    </div>
                    <div className='register-form-items'>
                        <i class='fa-solid fa-key icons'></i>
                        <input
                            required
                            autoComplete='off'
                            type='password'
                            name='password'
                            className='register-input'
                            placeholder='Password'
                        ></input>
                    </div>
                    <div className='register-form-items'>
                        <i class='fa-solid fa-key icons'></i>
                        <input
                            required
                            autoComplete='off'
                            type='password'
                            name='password'
                            className='register-input'
                            placeholder='Confirm Password'
                        ></input>
                    </div>
                    <button className='sign-up-button'>SIGN UP</button>
                    <p>Already have an account?</p>
                    <a>Sign in now!</a>
                </form>
            </div>
        </div>
    );
}
