import React from 'react'

import './Offline.css'

const Offline = ({ todos, onTodoClick }) => {

  return (
    <section className="hero offline__wrapper is-fullheight">
      <div className="hero-body offline__overlay">
        <div class="container">
          <h1 class="title is-2 has-text-weight-light">Welcome to OnMyTravel</h1>
          <h2 class="title is-1">A new way to share your travel experiences.</h2>
        </div>
      </div>
    </section>
  )
}

export default Offline
