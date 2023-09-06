import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const AddFriend = (props) => {

const token = localStorage.getItem('token')

const navigate = useNavigate();

const [friend, addFriend] = useState({
    id: props.friends.length,
    name: '',
    age: 0,
    email: ''
})

const [message, setMessage] = useState('');

const goBack = () => {
    navigate('/friends')
}

const changeHandler = (e) => {
    addFriend({...friend, [e.target.name]: e.target.value})
}

const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:9000/api/friends", friend, {
        headers: {
          'Authorization': token
        }}).then(res => setMessage(res.data[res.data.length - 1].name)).then(addFriend({
            id: props.friends.length,
            name: '',
            age: 0,
            email: ''
        })).catch(err => console.log(err))
}


if (!localStorage.getItem('token')) {

    return <Navigate to='/login' />
    }



return <>
<h1>this is the add friend page</h1>
<button onClick={goBack}>Return to Friends Page</button>
<form onSubmit={submitHandler}>
    <label>Name</label>
    <input type="text" name="name" onChange={changeHandler} value={friend.name}/>
    <label>Age</label>
    <input type="number" name="age" onChange={changeHandler} value={friend.age}/>
    <label>Email</label>
    <input type="email" name="email" onChange={changeHandler} value={friend.email}/>
    <button disabled={(friend.name !== '' && friend.age != 0 && friend.email != '') ? false : true}>Add Friend</button>
</form>
<h3>{message ? `Congrats! you have added a friend with the name ${message} to your friends list.` : ''}</h3>
</>
}


export default AddFriend;