import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

const App = () => {

  return (
    <Router>
      <Redirect from="/" to="/landing" />
      <Route path="/landing" component={ Landing } />
      <Route path="/register" component={ Register } />
      <Route path="/login" component={ Login } />
    </Router>
  );
}

export default App;
