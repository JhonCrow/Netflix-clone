import React, { useState } from 'react';
import { loginWithEmailAndPassword, registerWithEmailandPassword } from '../firebase';
import './SignupScreen.css'


export default function SignupScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='signupScreen'>

            <h1>Sign In</h1>
            <input
                name='email'
                placeholder='Email'
                type='email'
                onChange={e => setEmail(e.target.value)}
                value={email} />
            <input
                name='password'
                placeholder='Password'
                type='password'
                onChange={e => setPassword(e.target.value)}
                value={password} />
            <button type='submit' onClick={() => loginWithEmailAndPassword(email, password)}>Sign In</button>

            <h4>
                <span className='signupScreen__gray'>New to Netflix?</span>
                <span className='signupScreen__link' onClick={() => registerWithEmailandPassword(email, password)}>Sign Up now.</span>
            </h4>

        </div>
    );
};
