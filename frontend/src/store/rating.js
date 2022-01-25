import {csrfFetch} from './csrf'

const GET = 'rating/get'
const POST = 'rating/post'

export const get = (data) => {
    return {
        type: GET,
        payload: data
    }
}

export const post = (data) => {
    return {
        type: POST,
        payload: data
    }
}

export const getRating = () => async (dispatch) => {
    const rating = await csrfFetch('/api/ratings')
    const data = await rating.json()
    dispatch(get(data))
    return rating
}

// export const postRating = (data) => async (dispatch) => {
//     const {strainId, rating} = data
//     const response = await csrfFetch('/api/ratings', {
//         method: 'POST',
//         body: JSON.stringify({strainId, rating})
//     })
//     const newRating = await response.json()
//     dispatch(post(newRating))
//     return response
// }

const ratingReducer = (state=[], action) => {
    let newState
    switch(action.type){
        case GET:
            newState = Object.assign({}, state);
            newState = action.payload;
            return newState;
        // case POST:
            // newState = {...state, [action.payload.strainId]:action.payload.rating}
            // return newState
        default:
            return state
    }
}

export default ratingReducer
