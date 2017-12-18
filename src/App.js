import React, { Component } from 'react';
import logo from './adventure.png';
import './App.css';
import LoginScreen from './LoginScreen';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <LoginScreen />
        </p>
      </div>
    );
  }
}

export default App;