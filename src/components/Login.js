import React from 'react'

import './Login.css'

const Login = ({
  facebookStatus,
  logWithFacebook
}) => {
  return (
    <section className="hero login__wrapper is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="notification">
            <h1 className="title is-1">Login</h1>
              <p>
                Because we want to help you to share your most <b>magical moments</b> with as many friends and relatives
                as possibles, we started building OnMyTravel using the most popular social media.
              </p>
              <p>
                But <b>don't worry</b>, we won't share anything on Facebook without your approval.
              </p>

              <p className="padding">
                <button className="button is-link">Connect with Facebook</button>
              </p>

              <p className="is-size-7">Les informations recueillies sur ce formulaire sont enregistrées dans un fichier informatisé par OnMyTravel pour permettre l'accès au service offert par OnMyTravel. Elles sont conservées pendant la durée d'utilisation du service et sont destinées à OnMyTravel exclusivement. Elles ne sont pas communiquées à des tiers.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login