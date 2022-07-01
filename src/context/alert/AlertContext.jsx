import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";
import { ACTIONS } from "./AlertReducer";

const AlertContext = createContext()

export const AlertProvider = ({children}) => {
    const [state, dispatch] =  useReducer(alertReducer, null)
    const setAlert = (msg, type) => {
        dispatch({
            type:ACTIONS.SET_ALERT,
            payload:{msg: msg, type: type}
        })
        setTimeout(() => dispatch({type:ACTIONS.REMOVE_ALERT}), 3000)
    }
    return (
        <AlertContext.Provider value={{
            alert:state,
            setAlert
        }}>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertContext