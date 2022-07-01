import { createContext,  useState, useEffect, useReducer} from "react";
import gitReducer from "./GitReducer";
import { ACTIONS } from "./GitReducer";

const GitContext = createContext()


export const GitProvider = ({children}) => {
    const [state, dispatch] = useReducer(gitReducer, {users: [], user:{}, repos:[], loading: false})
    const setLoading = () => {
        dispatch({type:ACTIONS.SET_LOADING})
    }
    // useEffect(() => {
    //     fetchUser()
    // },[])
    const searchUsers = async (text) => {
        setLoading()

        const params = new URLSearchParams({
            q: text
        })

        const {items} = await fetch(`${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`,{
            headers: {
                Authorization:  `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        }).then(r => r.json())
        
        dispatch({
            type: ACTIONS.GET_USERS,
            payload: items,
        })
    }

    const getUser = async (login) => {
        setLoading()

        
        const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${login}`,{
            headers: {
                Authorization:  `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        })

        if (res.status === 404) {
            window.location = '/notfound'
        }
        else {
            const data = await res.json()

            const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${login}/repos`,{
                headers: {
                    Authorization:  `token ${process.env.REACT_APP_GITHUB_TOKEN}`
                }
            }).then(r => r.json())

            // console.log(response);

            

            dispatch({
                type: ACTIONS.GET_USER,
                payload: {data: data, repo: response},
            })
        }
        
    }

    const clearUsers = () => dispatch({type: ACTIONS.CLEAR_USERS})
    
  return (
    <GitContext.Provider value={{
        ...state,
        searchUsers,
        clearUsers,
        getUser
    }}>
        {children}
    </GitContext.Provider>
  )
}

export default GitContext