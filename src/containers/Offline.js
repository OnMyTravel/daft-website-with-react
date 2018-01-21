import React, { Component } from 'react';
import logo from './logo.svg';
import './Offline.css';

import { Link } from 'react-router-dom'

class Offline extends Component {
  render() {
    return (
      <div className="Offline">
        <div className="container">
          <div className="text">
            <h1>On My Travel revient.</h1>
            <p>L'application est actuellement en vacances mais reviendra sur mobile
            avec pleins de nouveautés super cool ! :p</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Offline;
