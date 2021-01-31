//import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/site/Header';
//import Bio from './components/challenges/day01/Bio';
import Footer from './components/site/Footer'
//import Home from './components/site/Home'
import Sidebar from './components/site/Sidebar';
//import FunctionalComponentDemo from './components/concepts/FunctionalComponentDemo';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Sidebar />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
