import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';
const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';
    console.log("came from ", location.state?.from);

    const handleGoogleSignin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="login-form">
            <div>
                <h2>Login Form</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Enter Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Enter Your Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to ema-john website? <Link to="/register">Create Account</Link></p>
                <div>-------------------or-------------------</div>
                <button onClick={handleGoogleSignin} className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login; <div>
    <h2>Login Form</h2></div>