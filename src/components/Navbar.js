import React, { Component } from 'react';

import './Navbar.css';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  render() {
    return (
      <nav className="navbar is-dark navbar__container" aria-label="main navigation">
  
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            On My Travel. {this.state.isActive}
          </a>
          <div className="navbar-burger burger" onClick={() => this.setState({ isActive: !this.state.isActive })}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
  
        <div className={"navbar-menu" + (this.state.isActive ? 'is-active' : '')}>
          <div className="navbar-end">
            <a className="navbar-item" href="/log-in">
              Log-in
            </a>
            <a className="navbar-item" href="/profile">
              Mon profile
            </a>
          </div>
        </div>
      </nav >
    )
  }
}

export default Navbar