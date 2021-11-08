import {csrfFetch} from './csrf'

const CHECKIN = 'actions/checkin'
const DEL = 'actions/del'
const EDIT = 'actions/edit'

export const checkin = (content) => {
    return {
        type: CHECKIN,
        payload: content
    }
}

export const edit = (content) => {
    return {
        type: EDIT,
        payload: content
    }
}

export const del = () => {
    return {
        type: DEL
    }
}

export const postCheckin = (content) => async (dispatch) => {
    // const {userId, strainId, text} = content
    const response = await csrfFetch('api/checkins', {
        method: 'POST',
        body: JSON.stringify()
    })
    const newPost = await response.json()
    dispatch(checkin(newPost))
    return response
}

export const delCheckin = () => async (dispatch) => {
    const response = await csrfFetch('untokd/chekins', {
        method: 'DELETE'
    })
    dispatch(checkin())
    return response
}


const sessionReducer = (state={user:null}, action) => {
    let newState
    switch(action.type){
        case CHECKIN:
            newState = Object.assign({}, state);
            newState = action.payload;
            return newState;
        case EDIT:
            newState = Object.assign({}, state);
            newState = action.payload;
            return newState;
        case DEL:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState;
        default:
            return state
    }
}

export default sessionReducer
