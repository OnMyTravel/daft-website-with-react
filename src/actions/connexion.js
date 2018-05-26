import {
  START_AUTHENTICATION,
  FACEBOOK_AUTHENTICATION_FAILED,
  FACEBOOK_AUTHENTICATION_SUCCESS,
  API_AUTHENTICATION_SUCCESS,
  API_AUTHENTICATION_FAILED
} from './actiontypes'

import { push } from 'react-router-redux'

import API from '../services/API'

export const logWithFacebook = () => {
  return function (dispatch) {
    dispatch({
      type: START_AUTHENTICATION
    })

    window.FB.login(function (response) {
      if (response.status === "connected") {
        dispatch({
          type: FACEBOOK_AUTHENTICATION_SUCCESS,
          result: {
            token: response.authResponse.accessToken,
            userID: response.authResponse.userID
          }
        })

        API.post('/users/register/facebook', {
          "access_token": response.authResponse.accessToken,
        })
        .then((data) => {
          dispatch({
            type: API_AUTHENTICATION_SUCCESS,
            result: {
              token: data.token
            }
          })

          dispatch(push('/profile'));
        })
        .catch((err) => {
          dispatch({
            type: API_AUTHENTICATION_FAILED
          })
        })

      } else {
        dispatch({
          type: FACEBOOK_AUTHENTICATION_FAILED
        })
      }
    })
  }
}