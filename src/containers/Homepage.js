import React, { Component } from 'react';
import logo from './logo.svg';

import { Link } from 'react-router-dom'

import Map from '../components/Map'

class Homepage extends Component {
  render() {
    return (
      <div className="App">
        <Map></Map>
      </div>
    );
  }
}

export default Homepage;
