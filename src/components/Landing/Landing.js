import { Link } from 'react-router-dom';

const Landing = () => {

  return (
    <div>
      <Link to={`/login`} >
        <button className="btn btn-primary" type="submit">Sign In</button>
      </Link>

      <Link to={`/register`} >
        <button className="btn btn-primary" type="submit">New User? Create Account</button>
      </Link>
    </div>
  )
}

export default Landing;
