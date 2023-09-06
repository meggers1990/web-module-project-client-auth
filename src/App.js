import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import Login from './login'
import {FriendsList} from './friendslist';
import AddFriend from './addFriend';
import Logout from './Logout';

function App() {


  const [friends, setFriends] = useState([])




  return (
    <div className="App">
      <nav>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/friends">Friends List</NavLink>
        <NavLink to="/friends/add">Add Friend</NavLink>
        <NavLink to="/logout">Logout</NavLink>
      </nav>
      <Routes>
        
      <Route exact path="/" element={<Login />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/friends" element={<FriendsList friends={friends} setFriends={setFriends}/>}/>
      <Route path="/friends/add" element={<AddFriend friends={friends}/>}/>
      <Route path="/logout" element={<Logout />}/>
      
      </Routes>
      
    </div>
  );
}

export default App;