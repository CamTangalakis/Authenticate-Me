import {csrfFetch} from './csrf'

const GET = 'strain/get'

export const get = (data) => {
    return {
        type: GET,
        payload: data
    }
}
export const getStrain = () => async (dispatch) => {
    const strain = await csrfFetch('api/strains')
    const data = await strain.json()
    dispatch(get(data))
    return strain
}

const strainReducer = (state={}, action) => {
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

export default strainReducer
