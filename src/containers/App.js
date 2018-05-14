import React, { Component } from 'react';
import './App.css';

import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Link to="/profile">Profile</Link>
        </p>
      </div>
    );
  }
}

export default App;
