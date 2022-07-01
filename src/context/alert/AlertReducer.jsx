export const ACTIONS ={
    SET_ALERT: 'setAlert',
    REMOVE_ALERT: 'removeAlert'
}

const alertReducer = (state, actions) => {
    switch(actions.type) {
        case ACTIONS.SET_ALERT:
            return actions.payload
        case ACTIONS.REMOVE_ALERT:
            return null
        default:
            return state
    }
}

export default alertReducer