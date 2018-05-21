import React from 'react'

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar is-transparent is-fixed-top navbar__container" aria-label="main navigation">
      <div className="navbar-start">
        <a className="navbar-item logo" href="/">
          On My Travel.
        </a>
      </div>
      <div className="container">
      <div className="navbar-end">        
          <a className="navbar-item" href="/log-in">
            Log-in
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar