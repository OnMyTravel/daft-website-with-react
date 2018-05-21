import React, { Component } from 'react';
import './Profile.css';
import { Link } from 'react-router-dom'

class Profile extends Component {
  render() {
    return (
      <section class="hero is-fullheight">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              My profile
            </h1>
            <h2 class="subtitle">
              Not an existing page yet ...
            </h2>

            <p><b>Congratulation !</b> You now have an account on OnMyTravel. Unfortunately, this page is quite blank for the moment.</p>
            <hr />
            <p><b>Any idea</b> on what should be on this page ? Tell me on Twitter with the hastag <a href="https://twitter.com">#OnMyTravel</a>.</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Profile;
