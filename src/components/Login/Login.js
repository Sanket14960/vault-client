import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState(null)
  const [loading, isLoading] = useState(false)

  const submitHandler = async event => {
    isLoading(true)
    event.preventDefault();
    console.log({email,password})

    var config = {
      method: 'post',
      url: 'http://localhost:3001/sign-in/',
      headers: {
        'Content-Type': 'application/json'
      },
      data : {"email": email ,"password": password }
    };

    try {
      const response = await axios(config)
      console.log(JSON.stringify(response.data));
    }
    catch (err) {
      setErrors(err.response.data.error)
      console.log(errors)
    }
    finally {
      isLoading(false)
    }
  };


  return (
    <form  onSubmit={submitHandler}>
      <h1> Login </h1>
      <div className="login-form">
        <label>Enter Email: </label>
        <input type="text" className="form-control" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div className="login-form">
        <label>Enter Password: </label>
        <input type="text" className="form-control" placeholder="Enter password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>
      {errors && <span className="danger hero">
        {errors}
      </span>}
      {/* <Link to={`/passwords`} > */}
        <button className="btn btn-primary" type="submit">Click to Login</button>
      {/* </Link> */}
    </form>
  )
}

export default Login;
