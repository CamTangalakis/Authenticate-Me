const ADD_USER = 'session/ADD_USER'
const SET_USER = 'session/SET_USER'
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

export const set = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}

export const login = (user) => async dispatch => {
    const {credential, password} = user
    const response = await fetch('/api/session', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({credential, password})
    })
    const newUser = await response.json()
    dispatch(add(newUser.user))
    return response
}

export const restoreUser = () => async dispatch => {
    const response = await fetch('/api/session')
    const res = await response.json()
    dispatch(set(res.user))
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
