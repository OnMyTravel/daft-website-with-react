import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'

class Profile extends Component {
  render() {
    return (
      <div className="App">
        Here is the profile page
        <Link to="/default">Home</Link>
      </div>
    );
  }
}

export default Profile;
