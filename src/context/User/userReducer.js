

export const AuthReducer = (state, action) => {
    switch(action.type) {
        case 'REGISTER_USER':
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            };
        case 'LOGIN_USER':
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            };
        case 'LOGOUT_USER':
            return {
                ...state,
                user: null,
                token: null
            }
        
        default:
            return state;
    }
}