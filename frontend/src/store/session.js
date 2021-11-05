const ADD_USER = 'session/ADD_USER'
const DEL_USER = 'session/DEL_USER'

export const add = (userId) => {
    return {
        type: ADD_USER,
        userId
    }
}

export const del = (userId) => {
    return {
        type: DEL_USER,
        userId
    }
}

export const addUser = (user) => async dispatch => {
    const response = await fetch('/api/session', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    })
    const newUser = await response.json()
    dispatch(add(newUser))
}

const sessionReducer = (state={}, action) => {
    switch(action.type){
        case ADD_USER:
            const newState = {
                ...state,
                [action.userId]: {id: action.userId}
            }
            return newState
        case DEL_USER:
            const newStateDel = {...state}
            delete newStateDel[action.userId]
            return newStateDel
        default:
            return state
    }
}

export default sessionReducer
