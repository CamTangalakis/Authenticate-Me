import {csrfFetch} from './csrf'

const GET = 'dispensary/get'

export const get = (data) => {
    return {
        type: GET,
        payload: data
    }
}
export const getDispensary = () => async (dispatch) => {
    const dispensary = await csrfFetch('/api/dispensaries/')
    const data = await dispensary.json()
    dispatch(get(data))
    return dispensary
}

const dispensaryReducer = (state=[], action) => {
    let newState
    switch(action.type){
        case GET:
            newState = Object.assign({}, state);
            newState = action.payload;
            return newState;
        default:
            return state
    }
}

export default dispensaryReducer
