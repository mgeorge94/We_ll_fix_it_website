import React from 'react';

import HomePage from './pages/HomePage';
import AllElectronicsPage from './components/AllElectronics/AllElectronicsPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
 return (
  <Router>
   <NavBar />
   <Switch>
    <Route path='/' component={HomePage} exact />
    <Route path='/AllElectronicsPage' component={AllElectronicsPage} exact />
   </Switch>
  </Router>
 );
}

export default App;
