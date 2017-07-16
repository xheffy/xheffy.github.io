import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import NavBar from './NavBar/NavBar.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <NavBar />
    );
  }
}

export default App;
