import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Details from './pages/details';
import Login from './pages/login';
import Register from './pages/register'

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about/' component={About}/>
        <Route exact path='/initiative/' component={ About }/>
        <Route exact path='/detail/' component={ Details }/>
        <Route exact path='/login/' component={ Login }/>
        <Route exact path='/register/' component={ Register }/>
      </div>
      
    </Router>
   
  );
}

export default App;
