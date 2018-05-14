import { START_FACEBOOK_AUTHENTICATION, FACEBOOK_AUTHENTICATION_FAILED } from '../actions/actiontypes'

const defaultState = {
    status: 'disconnected'
}

const UserReducers = (state = defaultState, action) => {
    switch (action.type) {
        case START_FACEBOOK_AUTHENTICATION:
          return Object.assign({}, state, {
            facebookStatus: 'pending'
          });
        
          case FACEBOOK_AUTHENTICATION_FAILED:
          return Object.assign({}, state, {
            facebookStatus: 'failed'
          });

        case 'LOG-USER':
            // window.FB.getLoginStatus(function(response) {
            //     console.log(response);
            // });

            return Object.assign({}, state, {
                status : (state.status === 'connected') ? 'disconnected' : 'connected'
            });
        default:
            return state
    }
}

export default UserReducers