import './Login.css'
import bankLogo from '../../assets/digital_assets/bank_loyaute_cropped.png'
import bankUsers from '../../assets/data/bankUsers.json'

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Home from "../Home/Home"

function Login() {

    localStorage.clear();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Use hook directly in the component


    const handleLogin = function(e) {
        e.preventDefault();
        
        // Check if the entered credentials match any user in the JSON data
        const user = bankUsers.find(user => user.username === username && user.password === password);
        
        if (user) {
          // Successful login
            console.log(user);
            console.log('Login successful');
          // Redirect or perform any other action on successful login

            // Store user information in localStorage
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/home');

        } else {
          // Login failed
            console.log('Invalid username or password');
            let loginErrorMsg = document.getElementsByClassName("userName")[0];
            loginErrorMsg.style.display = "block"
        }
      };

    return (
        <div className='loginPage'>
            <div className='loginWindow'>
                <div className='loginBankLogo'>
                    <img src={bankLogo} alt='bank-logo'></img>
                </div>
                <div className='loginText'>Welcome!</div>
                <form name='loginForm'>
                    <label className='userName' name='userName'>*Invalid username or password*</label>
                    <input type='text' className='userName' name='userName' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    <label className='passWord' name='passWord'></label>
                    <input type='text' className='passWord' name='passWord' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <button className='loginBtn' name='Login' onClick={handleLogin}>Login</button>
                </form>
                <button className='createUserBtn' name='createUser'>Create New Account</button>
            </div>
        </div>
    )
}

export default Login;