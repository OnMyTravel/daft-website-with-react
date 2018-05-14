import {
    START_FACEBOOK_AUTHENTICATION,
    FACEBOOK_AUTHENTICATION_FAILED,
    FACEBOOK_AUTHENTICATION_SUCCESS
} from './actiontypes'

export const logWithFacebook = () => {
    return function (dispatch) {
        dispatch({
            type: START_FACEBOOK_AUTHENTICATION
        })

        window.FB.login(function (response) {
            if(response.status === "connected") {
                dispatch({
                    type: FACEBOOK_AUTHENTICATION_SUCCESS,
                    result: {
                        token: response.authResponse.accessToken,
                        userID: response.authResponse.userID
                    }
                })
            } else {
                dispatch({
                    type: FACEBOOK_AUTHENTICATION_FAILED
                })
            }
        })
    }
}