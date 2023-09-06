import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const Logout = (props) => {

    const navigate = useNavigate();

const token = localStorage.getItem('token');

const logoutClick = () => {
    axios.post("http://localhost:9000/api/logout", {}, {
        headers: {
          'Authorization': token
        }}).then(res => console.log(res)).then(localStorage.removeItem('token')).then(navigate("/")).catch(err => console.log(err))
}



if (!localStorage.getItem('token')) {

return <Navigate to='/login' />
}

{
    return <>
            <h1>this is the logout page</h1>
            <button onClick={logoutClick}>Logout</button>
    </>
} 
}

export default Logout;