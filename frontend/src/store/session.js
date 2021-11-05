import {csrfFetch} from './csrf'

const ADD_USER = 'session/ADD_USER'
const DEL_USER = 'session/DEL_USER'

export const add = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

export const del = () => {
    return {
        type: DEL_USER
    }
}

export const login = (user) => async dispatch => {
    const {credential, password} = user
    const response = await csrfFetch('/api/session', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({credential, password})
    })
    const newUser = await response.json()
    dispatch(add(newUser.user))
    return response
}

export const restoreUser = () => async dispatch => {
    const response = await csrfFetch('/api/session')
    const res = await response.json()
    dispatch(add(res.user))
    return response
}

export const signup = (user) => async dispatch => {
    const {username, email, password} = user
    const response = await csrfFetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
            username, email, password
        })
    })
    const data = await response.json()
    dispatch(add(data.user))
    return response
}

export const logout = (user) => async dispatch => {
    const response = await csrfFetch('/api/session', {
        method: "DELETE"
    })
    dispatch(del())
}

const sessionReducer = (state={user:null}, action) => {
    let newState
    switch(action.type){
        case ADD_USER:
            newState = {
                ...state,
                [action.userId]: {id: action.userId}
            }
            return newState
        case DEL_USER:
            newState = {...state}
            delete newState[action.userId]
            return newState
        default:
            return state
    }
}

export default sessionReducer
