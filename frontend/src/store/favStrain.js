// import {csrfFetch} from './csrf'

// const MAKE = 'actions/make'
// const DEL = 'actions/del'


// export const post = (userId, strainId) => {
//     return {
//         type: MAKE,
//         payload: {userId, strainId}
//     }
// }

// export const del = (id) => {
//     return {
//         type: DEL,
//         payload: id
//     }
// }

// export const postFavStrain = (userId, strainId) => async (dispatch) => {
//     const {userId, strainId} = content
//     const response = await csrfFetch('/api/favStrain', {
//         method: 'POST',
//         body: JSON.stringify({userId, strainId})
//     })
//     const newPost = await response.json()
//     dispatch(make(newPost.checkin))
//     return response
// }

// export const delFavStrain = (id) => async (dispatch) => {
//     const response = await csrfFetch('/api/favStrain', {
//         method: 'DELETE'
//     })
//     dispatch(del(id))
//     return response
// }

// const favStrainReducer = (state=null, action) => {
//     let newState
//     switch(action.type){
//         case MAKE:
//             newState = Object.assign({}, state);
//             newState = action.payload;
//             return newState;
//         case DEL:
//             newState = Object.assign({}, state);
//             newState[action.payload] = null;
//             return newState;
//         default:
//             return state
//     }
// }

// export default favStrainReducer;
