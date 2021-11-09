import React, { useEffect, useState } from 'react';
import * as checkinActions from '../../store/checkin';
import * as strainActions from '../../store/strain'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const CheckinForm = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    const [text, setText] = useState('')
    const [userId, setUserId] = useState(0)
    const [strainId, setStrainId] = useState(0)
    const strains = useSelector(state => state.strains)
    // const checkin = useSelector(state => state.checkin)
    // console.log(checkin)

    const onSubmit = async(e) => {
        e.preventDefault()
        setUserId(sessionUser.id)
        return dispatch(checkinActions.postCheckin({ userId, strainId, text }));
    }
    console.log(strains, '<-------------------')

    useEffect(()=> {
        dispatch(strainActions.getStrain())
    }, [dispatch])

    return (
        <form onSubmit={onSubmit}>
            <label>Choose a Strain:</label>
                <select onChange={e=> setStrainId(e.target.value)}>
                    {Object.keys(strains).map((key)=> <option value={strains[key].id}>{strains[key].name} </option>)}
                </select>
            <label>Comment:</label>
                <input
                    type='textarea'
                    placeholder='Say something...'
                    value={text}
                    onChange={(e)=>setText(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default CheckinForm
