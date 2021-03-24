import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form className="add-form">
      <h1> Login </h1>
      <div className="login-form">
        <label>Enter Username: </label>
        <input type="text" placeholder="Enter username" value={username} onChange={(event) => setUsername(event.target.value)} />
      </div>
      <div className="login-form">
        <label>Enter Password: </label>
        <input type="text" placeholer="Enter password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>    
      <Link to={`/passwords`} >
        <button className="button" type="submit">Register</button>
      </Link>    
    </form>
  )
}

export default Login;