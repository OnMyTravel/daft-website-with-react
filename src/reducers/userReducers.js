import {
    START_FACEBOOK_AUTHENTICATION,
    FACEBOOK_AUTHENTICATION_FAILED,
    FACEBOOK_AUTHENTICATION_SUCCESS
} from '../actions/actiontypes'

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

        case FACEBOOK_AUTHENTICATION_SUCCESS:
            console.log(action)
            return Object.assign({}, state, {
                facebookStatus: 'success',
                facebook: {
                    token: action.result.token,
                    userID: action.result.userID
                }
            });

        default:
            return state
    }
}

export default UserReducers