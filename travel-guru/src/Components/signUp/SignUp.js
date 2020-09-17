import React, { useContext, useState } from 'react';
import './SignUp.css'
import { handleGoogleSignIn, handleSignOut, handleFbSignIn, initializeLoginFramework, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './LogInManager';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import fb from '../../travel-guru/Icon/fb.png'
import google from '../../travel-guru/Icon/google.png'



const SignUp = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    });
    initializeLoginFramework();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true)
            })
    }
    const signOut = () => {
        handleSignOut()
            .then(res => {
                handleResponse(res, false);
            })
    }
    const facebookSignIn = () => {
        handleFbSignIn()
            .then(res => {
                handleResponse(res, true)
            })
    }
    const handleResponse = (res, redirect) => {
        setUser(res)
        setLoggedInUser(res);
        history.replace(from);
        if (redirect) {

        }
    }

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true)

                })
        }
        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true)
                })
        }
        e.preventDefault();
    }
    return (
        <div>
            <Header name={loggedInUser}></Header>
            <div className='center-alignment'>

                {newUser ? <label style={{ fontSize: '30px' }}>Create an account</label> : <label style={{ fontSize: '30px' }}>log in with your email & password</label>}
                <form onSubmit={handleSubmit}>
                    {newUser && <input name="name" className="input-field" type="text" onBlur={handleBlur} placeholder="Your name" />}
                    <br />
                    <input type="text" name="email" className="input-field" onBlur={handleBlur} placeholder="Your Email address" required />
                    <br />
                    <input type="password" name="password" className="input-field" onBlur={handleBlur} placeholder="Your Password" required />
                    <br />
                    {newUser && <input name="confirmPassword" type="text" className="input-field" onBlur={handleBlur} placeholder="confirm Your Password" required />}
                    <br />
                    <input className="signUp-btn" type="submit" value={newUser ? 'Sign up' : 'Sign in'} />
                </form>
                <p>are you a new user? <span style={{ cursor: 'pointer' }} onClick={() => setNewUser(!newUser)}>sign up</span> </p>
            </div>

            <div className="social-signIn d-flex align-items-center" onClick={facebookSignIn}> <img src={fb} style={{ width: '37px', height: '37px', margin: '10px' }} alt="" /> <p style={{ marginLeft: '100px' }}>sign in with Facebook</p> </div>
            <br />
            <div className="social-signIn d-flex align-items-center" onClick={googleSignIn}> <img src={google} style={{ width: '37px', height: '37px', margin: '10px' }} alt="" /> <p style={{ marginLeft: '100px' }}>sign in with Google</p> </div>



            <p style={{ color: 'red' }}>{user.error}</p>


            {user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'Logged In'} successfully</p>}
        </div>
    );
};

export default SignUp;