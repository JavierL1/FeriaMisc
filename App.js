import React, { Component } from 'react';
import logo from './assets/logo.png';
import './App.css';

import StatusList from './Components/StatusList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Estado de los servicios</h1>
        </header>
        <StatusList />
      </div>
    );
  }
}

export default App;
