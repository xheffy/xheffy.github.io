import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import NavBar from './NavBar';
import Homepage from './Homepage';
import About from './About';
import Projects from './Projects';
import Food from './Food';
import Contact from './Contact';

import './App.css';

class App extends Component {
  render() {
    return (
        <Route render={({ location }) => (
          <div>
            <NavBar theme={this.colorTheme(location)} location={location} />
            <Route exact path={'/'} render={() => (
              <Homepage theme={this.colorTheme(location)}/>
            )} />
            <Route exact path={'/about'} render={() => (
              <About theme={this.colorTheme(location)}/>
            )} />
            <Route exact path={'/projects'} render={() => (
              <Projects theme={this.colorTheme(location)}/>
            )} />
            <Route exact path={'/food'} render={() => (
              <Food theme={this.colorTheme(location)}/>
            )} />
            <Route exact path={'/contact'} render={() => (
              <Contact theme={this.colorTheme(location)}/>
            )} />
          </div>
        )} />
    );
  }

  colorTheme(location) {
    let theme;

    switch (location.pathname) {
      case '/about':
        theme = {
          backgroundColor: '#F1F8E9',
          mainColor: '#DCEDC8',
          playerColor: '#33691E'
        }
        break;
      case '/projects':
        theme = {
          backgroundColor: '#E0F2F1',
          mainColor: '#B2DFDB',
          playerColor: '#1A237E'
        }
        break;
      case '/food':
        theme = {
          backgroundColor: '#FFF8E1',
          mainColor: '#FFECB3',
          playerColor: '#FF6F00'
        }
        break;
      case '/contact':
        theme = {
          backgroundColor: '#EFEBE9',
          mainColor: '#D7CCC8',
          playerColor: '#212121'
        }
        break;
      default:
        theme = {
          backgroundColor: '#F3E5F5',
          mainColor: '#E1BEE7',
          playerColor: '#4A148C'
        }
    }

    return theme;
  }
}

export default App;
