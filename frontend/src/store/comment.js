import {csrfFetch} from './csrf'

const COMMENT = 'actions/comment'
const DEL = 'actions/del'
const EDIT = 'actions/edit'
const GET = 'actions/get'

export const comment = (content) => {
    return {
        type: COMMENT,
        payload: content
    }
}

export const get = () => {
    return {
        type: GET
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

export const postComment = (content) => async (dispatch) => {
    const {userId, checkinId, comment} = content
    const response = await csrfFetch('api/comments', {
        method: 'POST',
        body: JSON.stringify({userId, checkinId, comment})
    })
    const newPost = await response.json()
    dispatch(comment(newPost))
    return response
}

export const getComment = () => async (dispatch) => {
    const comment = await csrfFetch('api/comments')
    const data = await comment.json()
    dispatch(get(data))
    return comment
}

export const delComment = () => async (dispatch) => {
    const response = await csrfFetch('api/comments', {
        method: 'DELETE'
    })
    dispatch(comment())
    return response
}

const commentReducer = (state={user:'Demo-lition'}, action) => {
    let newState
    switch(action.type){
        case COMMENT:
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

export default commentReducer
