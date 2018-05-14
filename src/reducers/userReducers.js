const defaultState = {
    status: 'disconnected'
}

function loginWithFacebook(state) {

}

const UserReducers = (state = defaultState, action) => {
    switch (action.type) {
        case 'LOG-USER':
            loginWithFacebook(state);

            //window.FB.login()
            window.FB.getLoginStatus(function(response) {
                console.log(response);
            });

            return Object.assign({}, state, {
                status : (state.status === 'connected') ? 'disconnected' : 'connected'
            });
        default:
            return state
    }
}

export default UserReducers