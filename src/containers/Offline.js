import React, { Component } from 'react';
import CustomButton from '../components/custombutton'
import './Offline.css';

class Offline extends Component {

  increment() {
    console.log('ICI');
  }

  render() {
    return (
      <div className="Offline">
        <div className="container">
          <div className="text">
            <h1>On My Travel revient.</h1>
            <p>L'application est actuellement en vacances mais reviendra sur mobile
            avec pleins de nouveautés super cool ! :p</p>
            <CustomButton click={this.increment}></CustomButton>
          </div>
        </div>
      </div>
    );
  }
}

export default Offline;
