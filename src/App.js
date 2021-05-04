import React from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
 return (
  <Router>
   <HomePage />
  </Router>
 );
}

export default App;
