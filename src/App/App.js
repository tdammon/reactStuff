import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Image-header">
          <img src={logo} className="App-logo" alt="logo" /> 
        </header>
      </div>
    );
  }
}

export default App;
