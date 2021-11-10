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

export const del = (id) => {
    return {
        type: DEL,
        payload: id
    }
}

export const postCheckin = (content) => async (dispatch) => {
    const {userId, strainId, text} = content
    const response = await csrfFetch('/api/checkins', {
        method: 'POST',
        body: JSON.stringify({userId, strainId, text})
    })
    const newPost = await response.json()
    dispatch(checkin(newPost.checkin))
    console.log(newPost)
    return response
}

export const editCheckin = (content, id) => async (dispatch) => {
    const {text} = content
    const response = await csrfFetch(`/api/checkins/${id}`, {
        method: 'PUT',
        body: JSON.stringify({text})
    })
    const editPost = await response.json()
    dispatch(edit(editPost))
    return response
}

export const getCheckin = () => async (dispatch) => {
    const checkins = await csrfFetch('/api/checkins')
    const data = await checkins.json()
    dispatch(get(data))
    return checkins
}

export const delCheckin = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/checkins/${id}`, {
        method: 'DELETE'
    })
    dispatch(del(id))
    return response
}

const checkinReducer = (state={user:'Demo-used'}, action) => {
    let newState
    switch(action.type){
        case CHECKIN:
            newState = Object.assign({}, state);
            newState[action.payload.id] = action.payload;
            return newState;
        case EDIT:
            newState = Object.assign({}, state);
            newState = action.payload;
            return newState;
        case GET:
            newState = Object.assign({}, state);
            newState = action.payload.reduce((accumulator, element)=> {
                accumulator[element.id] = element
                return accumulator
            }, {});
            return newState;
        case DEL:
            newState = Object.assign({}, state);
            delete newState[action.payload];
            return newState;
        default:
            return state
    }
}

export default checkinReducer
