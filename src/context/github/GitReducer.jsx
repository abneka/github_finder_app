export const ACTIONS = {
    GET_USERS: 'getUsers',
    SET_LOADING: 'setLoading',
    CLEAR_USERS: 'clearUsers',
    GET_USER: 'getUser'
}

const gitReducer = (state, actions) => {
    switch(actions.type) {
        case ACTIONS.GET_USERS:
            return {
                ...state,
                users: actions.payload,
                loading: false,
            }
        case ACTIONS.SET_LOADING:
            return { 
                ...state,
                loading: true,
            }
        case ACTIONS.CLEAR_USERS:
            return {
                ...state,
                users: []
            }
        case ACTIONS.GET_USER:
            return {
                ...state,
                user: actions.payload.data,
                repos: actions.payload.repo,
                loading: false
            }
        default:
            return state
    }
}

export default gitReducer