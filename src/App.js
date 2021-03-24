import { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';

import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Passwords from './components/Passwords/Passwords';

const App = () => {
  

  return (
    <Router>
      <Route path="/register" component={ Register } />
      <Route path="/login" component={ Login } />
      <Route path="/passwords" component={ Passwords } />
    </Router>
  );
}

export default App;
