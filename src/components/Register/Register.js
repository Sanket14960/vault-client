import axios from 'axios';
import { useState } from 'react';

const Register = () => {
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
      url: 'http://localhost:3001/sign-up/',
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
    <form class="form-inline" onSubmit={submitHandler}>
      <h1> Register </h1>

      <div className="form-group">
        <label> Email: </label>
        <input type="text" className="form-control" placeholder="Enter Email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div className="form-group">
        <label> Password: </label>
        <input type="text" className="form-control" placeholder="Enter Password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>
      {errors && <span className="danger hero">
        {errors}
      </span>}

      <button className="btn btn-primary" type="submit">
      <span>Click to Register</span>
      {loading && <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>}
      </button>
    </form>
  )
}

export default Register;
