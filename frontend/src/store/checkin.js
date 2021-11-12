import {csrfFetch} from './csrf'

const POST = 'actions/post'
const DEL = 'actions/del'
const EDIT = 'actions/edit'
const GET = 'actions/get'
const POSTCOMM = 'actions/postComm'
const DELCOMM = 'action/delCom'
const EDITCOMM = 'action/editCom'

export const post = (content) => {
    return {
        type: POST,
        payload: content
    }
}

export const postComm = (content) => {
    return {
        type: POSTCOMM,
        payload: content
    }
}

export const edit = (content) => {
    return {
        type: EDIT,
        payload: content
    }
}

// export const editComm = (id, content) => {
//     return {
//         type: EDITCOMM,
//         payload: {id, content}
//     }
// }

export const get = (content) => {
    return {
        type: GET,
        payload: content
    }
}

export const del = (id) => {
    return {
        type: DEL,
        payload: id
    }
}

export const delComm = (id, checkinId) => {
    return {
        type: DELCOMM,
        payload: {id, checkinId}
    }
}

export const postCheckin = (content) => async (dispatch) => {
    const {userId, strainId, text} = content
    const response = await csrfFetch('/api/checkins', {
        method: 'POST',
        body: JSON.stringify({userId, strainId, text})
    })
    const newPost = await response.json()
    dispatch(post(newPost.checkin))
    return response
}

export const getCheckin = () => async (dispatch) => {
    const checkins = await csrfFetch('/api/checkins')
    const data = await checkins.json()
    // console.log(checkins, '!!!!!!!!11')
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

export const editCheckin = (id, content) => async (dispatch) => {
    const text = content
    const response = await csrfFetch(`/api/checkins/${id}`, {
        method: 'PUT',
        body: JSON.stringify({text})
    })
    const editPost = await response.json()
    // console.log(editPost, '<---------')
    dispatch(edit(editPost))
    return response
}

export const postComment = (content) => async (dispatch) => {
    const {userId, checkinId, comment} = content
    const response = await csrfFetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({userId, checkinId, comment})
    })
    const newPost = await response.json()
    // console.log(newPost.comm, '<------------------')
    dispatch(postComm(newPost.comm))
    return response
}

export const getComment = () => async (dispatch) => {
    const comment = await csrfFetch('/api/comments')
    const data = await comment.json()
    console.log(data, '!!!!!!!!!!!!!!!!!!!!!')
    dispatch(get(data))
    return comment
}

// export const editComment = (content, id) => async (dispatch) => {
//     const {text} = content
//     const response = await csrfFetch(`/api/comments/${id}`, {
//         method: 'PUT',
//         body: JSON.stringify(text)
//     })

//     const editCom = await response.json()
//     dispatch(editComm(editCom))
//     return response
// }

export const delComment = (id, checkinId) => async (dispatch) => {
    const response = await csrfFetch(`/api/comments/${id}`, {
        method: 'DELETE'
    })
    dispatch(delComm(id, checkinId))
    return response
}

const checkinReducer = (state={user:null}, action) => {
    let newState
    switch(action.type){
        case POST:
            newState = Object.assign({}, state);
            newState[action.payload.id] = action.payload;
            return newState;
        case POSTCOMM:
            newState = Object.assign({}, state);
            // console.log(action.payload, '<--------')
            newState[action.payload.checkinId].Comments?.push(action.payload);
            return newState;
        case EDIT:
            newState = Object.assign({}, state);
            newState[action.payload.id] = action.payload;
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
            console.log(newState[action.payload], '<----------!!!!!!!')
            // delete newState[action.payload].Comments;
            delete newState[action.payload];
            return newState;
        case DELCOMM:
            newState = Object.assign({}, state);
            console.log(newState[action.payload.checkinId].Comments, '<-- delCom')
            const commIndex = newState[action.payload.checkinId].Comments.findIndex(comm => comm.id === action.payload.id)
            newState[action.payload.checkinId].Comments.splice(commIndex, 1)
            newState[action.payload.checkinId].Comments = newState[action.payload.checkinId].Comments.slice()
            return newState;
        default:
            return state
    }
}

export default checkinReducer
