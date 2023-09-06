import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { createBrowserHistory } from 'history'
import { useNavigate } from 'react-router-dom'

const Login = () => {

let navigate = useNavigate();

const [credentials, setCredentials ] = useState({
    username: '',
    password: ''
})

const [error, setError] = useState('')

const handleChange = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
    // console.log("username:", credentials.username, "password:", credentials.password);
}

const loginTry = (e) => {
e.preventDefault();
axios.post("http://localhost:9000/api/login", {username: credentials.username, password: credentials.password}).then(res => 
localStorage.setItem("token", res.data.token))
.then(res => navigate('/friends'))
.catch(err => setError(err.response.data.error))

}

    return <>
    <h1>
        this is the login
    </h1>
    <form onSubmit={loginTry}>
        <label>username</label>
        <input name="username" onChange={handleChange} value={credentials.username}/>
        <label>password</label>
        <input name="password" type="password" onChange={handleChange} value={credentials.password}/>
        <button>Login</button>
    </form>
    <h6>{error}</h6>
    </>
}

export default Login;