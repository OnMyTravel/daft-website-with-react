import React from 'react'

const Login = ({
    userStatus,
    toogleUserConnectionStatus
}) => {
    console.log(userStatus);
    return (
        <div>
            <div>{userStatus}</div>
            <a href="#" onClick={toogleUserConnectionStatus}>Me connecter avec Facebook</a>
        </div>
    )
}

export default Login