// import {csrfFetch} from './csrf'

// const COMMENT = 'actions/sendComment'
// const DEL = 'actions/del'
// const EDIT = 'actions/edit'
// const GET = 'actions/get'

// export const sendComment = (content) => {
//     return {
//         type: COMMENT,
//         payload: content
//     }
// }

// export const get = (content) => {
//     return {
//         type: GET,
//         payload: content
//     }
// }

// export const edit = (content) => {
//     return {
//         type: EDIT,
//         payload: content
//     }
// }

// export const del = (id) => {
//     return {
//         type: DEL,
//         payload: id
//     }
// }

// export const postComment = (content) => async (dispatch) => {
//     const {userId, checkinId, comment} = content
//     const response = await csrfFetch('/api/comments', {
//         method: 'POST',
//         body: JSON.stringify({userId, checkinId, comment})
//     })
//     const newPost = await response.json()
//     dispatch(post(newPost.comment))
//     return response
// }

// export const getComment = () => async (dispatch) => {
//     const comment = await csrfFetch('/api/comments')
//     const data = await comment.json()
//     console.log(data, '!!!!!!!!!!!!!!!!!!!!!')
//     dispatch(get(data))
//     return comment
// }

// export const editComment = (content, id) => async (dispatch) => {
//     const {text} = content
//     const response = await csrfFetch(`/api/comments/${id}`, {
//         method: 'PUT',
//         body: JSON.stringify(text)
//     })

//     const editCom = await response.json()
//     dispatch(edit(editCom))
//     return response
// }

// export const delComment = (id) => async (dispatch) => {
//     const response = await csrfFetch(`/api/comments/${id}`, {
//         method: 'DELETE'
//     })
//     dispatch(del(id))
//     return response
// }

// const commentReducer = (state={user:null}, action) => {
//     let newState
//     switch(action.type){
//         case COMMENT:
//             newState = Object.assign({}, state);
//             newState[action.payload] = action.payload;
//             return newState;
//         case EDIT:
//             newState = Object.assign({}, state);
//             newState = action.payload;
//             return newState;
//         case GET:
//             newState = Object.assign({}, state);
//             newState = action.payload.reduce((accumulator, element)=> {
//                 accumulator[element.id] = element
//                 return accumulator
//             }, {});
//             return newState;
//         case DEL:
//             newState = Object.assign({}, state);
//             delete newState[action.payload];
//             return newState;
//         default:
//             return state
//     }
// }

// export default commentReducer
