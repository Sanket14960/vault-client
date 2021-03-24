import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (event) => {
    event.preventDefault();
    console.log({username,password})

    var config = {
      method: 'post',
      url: 'http://localhost:3001/register/',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : {"username": username ,"password": password }
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <h1> Register </h1>
      <div className="login-form">
        <label>Enter Username: </label>
        <input type="text" placeholder="Enter username" value={username} onChange={(event) => setUsername(event.target.value)} />
      </div>
      <div className="login-form">
        <label>Enter Password: </label>
        <input type="text" placeholer="Enter password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>    
        <button className="button" type="submit">Click to Register</button>  
    </form>
  )
}

export default Register;
