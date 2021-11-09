import {csrfFetch} from './csrf'

const CHECKIN = 'actions/checkin'
const DEL = 'actions/del'
const EDIT = 'actions/edit'
const GET = 'actions/get'

export const checkin = (content) => {
    return {
        type: CHECKIN,
        payload: content
    }
}

export const get = (content) => {
    return {
        type: GET,
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
    const {userId, strainId, text} = content
    const response = await csrfFetch('/api/checkins', {
        method: 'POST',
        body: JSON.stringify({userId, strainId, text})
    })
    const newPost = await response.json()
    dispatch(checkin(newPost))
    return response
}

export const getCheckin = () => async (dispatch) => {
    const checkins = await csrfFetch('/api/checkins', {

    })
    const data = await checkins.json()
    dispatch(get(data))
    return checkins
}

export const delCheckin = () => async (dispatch) => {
    const response = await csrfFetch('/api/checkins', {
        method: 'DELETE'
    })
    dispatch(del())
    return response
}

const checkinReducer = (state={user:'Demo-used'}, action) => {
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
        case GET:
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

export default checkinReducer
