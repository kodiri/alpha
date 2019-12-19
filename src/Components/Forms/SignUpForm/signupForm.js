import React, { useState } from 'react';
import GoogleLoginButton from '../../GoogleLogin/GoogleLoginButton';
import './signupFormStyle.css';

export default function SignUp() {
    let [name, setName] = useState('');
    function handleNameChange(e) {
        setName(<h3>Your festival {e.target.value} is just a few clicks away, let's get this party started!</h3>)
    }
    return (
        <div>
            <main id='signUpPageContent'>
                {name}
                <br />
                <GoogleLoginButton text="Sign Up with Google" />
                <p id="or"><span>or</span></p>
                <p>sign up with your email address</p>

                <form id='loginForm'>
                    <input className='login' type="text" placeholder="Festival name" required onChange={handleNameChange} />

                    <input className='login' type="text" placeholder="Email" required />

                    <input className='login' type="text" placeholder="Password" required />

                    <input className='login' type="text" placeholder="Confirm Password" required />
                </form><br/>

                <div className="container">
                    <button className="item">Create Account</button><br/>
                    <a className='account-anchor' href="/login"><button className="item">Already have an account?</button></a>
                </div>
            </main>
        </div>
    )
}