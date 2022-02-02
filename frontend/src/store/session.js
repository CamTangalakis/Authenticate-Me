import {csrfFetch} from './csrf'

const ADD_USER = 'session/add'
const DEL_USER = 'session/del'
const GET_USERS = 'session/get'

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

export const get = (content) => {
    return {
        type: GET_USERS,
        payload: content
    }
}

export const getUsers = () => async(dispatch) => {
    const response = await csrfFetch('/api/users/')
    const data = await response.json()
    dispatch(get(data))
    return response
}

export const login = (user) => async (dispatch) => {
    const {credential, password} = user
    const response = await csrfFetch('/api/session/', {
        method: 'POST',
        body: JSON.stringify({credential, password})
    })
    const newUser = await response.json()
    dispatch(add(newUser.user))
    return response
}

export const restoreUser = () => async (dispatch) => {
    const response = await csrfFetch('/api/session/')
    const res = await response.json()
    dispatch(add(res.user))
    return response
}

export const signup = (user) => async (dispatch) => {
    const {username, email, password, owner} = user
    const response = await csrfFetch('/api/users/', {
        method: 'POST',
        body: JSON.stringify({
            username, email, password, owner
        })
    })
    const data = await response.json()
    dispatch(add(data.user))
    return response
}

export const logout = () => async (dispatch) => {
    const response = await csrfFetch('/api/session/', {
        method: "DELETE"
    })
    dispatch(del())
    return response;
}

const sessionReducer = (state={user:'Demo-used'}, action) => {
    let newState
    switch(action.type){
        case ADD_USER:
            newState = Object.assign({}, state);
            newState.user = action.payload;
            return newState;
        case DEL_USER:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState;
        case GET_USERS:
            newState = {...state}
            newState.users = action.payload.reduce((accumulator, element)=> {
                accumulator[element.id] = element
                return accumulator
            }, {});
            return newState
        default:
            return state
    }
}

export default sessionReducer
