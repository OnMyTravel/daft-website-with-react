import {
  START_AUTHENTICATION,
  FACEBOOK_AUTHENTICATION_FAILED,
  FACEBOOK_AUTHENTICATION_SUCCESS,
  API_AUTHENTICATION_SUCCESS
} from '../actions/actiontypes'

const userDefaultState = {
  isLoggedIn: false
}

const UserReducers = (state = userDefaultState, action) => {
  switch (action.type) {
    case START_AUTHENTICATION:
      return Object.assign({}, state, {
        facebookStatus: 'pending'
      });

    case FACEBOOK_AUTHENTICATION_FAILED:
      return Object.assign({}, state, {
        facebookStatus: 'failed'
      });

    case FACEBOOK_AUTHENTICATION_SUCCESS:
      return Object.assign({}, state, {
        facebookStatus: 'success',
        facebook: {
          token: action.result.token,
          userID: action.result.userID
        }
      });

    case API_AUTHENTICATION_SUCCESS:
      return Object.assign({}, state, {
        api_token: action.result.token,
        isLoggedIn: true
      });

    default:
      return state
  }
}

export default UserReducers