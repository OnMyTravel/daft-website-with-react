import React from 'react'

const Login = ({
    facebookStatus,
    logWithFacebook
}) => {
    return (
        <div>
            <div>{facebookStatus}</div>
            <a href="#" onClick={logWithFacebook}>Me connecter avec Facebook</a>
        </div>
    )
}

export default Login