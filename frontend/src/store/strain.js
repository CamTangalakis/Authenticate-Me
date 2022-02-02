import {csrfFetch} from './csrf'

const GET = 'strain/get'

export const get = (data) => {
    return {
        type: GET,
        payload: data
    }
}
export const getStrain = () => async (dispatch) => {
    const strain = await csrfFetch('/api/strains')
    const data = await strain.json()
    dispatch(get(data))
    return strain
}


const POST = 'strain/post'

export const post = (data) => {
    return {
        type: POST,
        payload: data
    }
}

export const postStrain = (data) => async (dispatch) => {
    const {name, strainType, description, photo, brand} = data
    const response = await csrfFetch('/api/strains/', {
        method: 'POST',
        body: JSON.stringify({name, strainType, description, photo, brand})
    })
    const newStrain = await response.json()
    dispatch(post(newStrain))
    return response
}

const strainReducer = (state=[], action) => {
    let newState
    switch(action.type){
        case GET:
            newState = Object.assign({}, state);
            newState = action.payload;
            return newState;
        case POST:
            newState = {...state}
            console.log(action.payload, newState, '<--------')
            return newState
        default:
            return state
    }
}

export default strainReducer
