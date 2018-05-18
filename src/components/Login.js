import React from 'react'

import './Login.css'

const Login = ({
  facebookStatus,
  logWithFacebook
}) => {
  return (
    <div className="login__wrapper">
      <div className="login__overlay">
        <div className="login__container">
          <div className="login__logo">
            On My Travel.
          </div>
          <div className="login_panel">
            <div>Status: {facebookStatus}</div>
            <a href="#" onClick={logWithFacebook}>Me connecter avec Facebook</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login