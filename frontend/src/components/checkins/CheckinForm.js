import React, { useEffect, useState } from 'react';
import * as checkinActions from '../../store/checkin';
import * as strainActions from '../../store/strain'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './checkin.css'

const CheckinForm = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    const [text, setText] = useState('')
    const [userId] = useState(parseInt(sessionUser.id))
    const [strainId, setStrainId] = useState(0)
    const [errors, setErrors] = useState([])
    // const [strains, setStrains] = useState()
    const strains = useSelector(state => state.strain)
    // const checkin = useSelector(state => state.checkin)
    // console.log(checkin)

    const onSubmit = async(e) => {
        e.preventDefault();

        return dispatch(checkinActions.postCheckin({ userId, strainId, text }))
            // .catch(async (res) => {
            //     const data = await res.json();
            //     if (data && data.errors) setErrors(data.errors);
    }
    // console.log(strains, '<-------------------')
    // console.log(userId, strainId, text)

    useEffect(()=> {
        dispatch(strainActions.getStrain())
    }, [dispatch])

    return (
        <form onSubmit={onSubmit} className='checkinForm'>
            <ul>
                {errors.map(e=> <li key={e}>{e}</li>)}
            </ul>
            <h2 id='checkinHeader'>Check In</h2>
            <label id='checkinField'>Choose a Strain:</label>
                <select onChange={e=> setStrainId(e.target.value)}>
                    <option selected='selected' value={null}>Select...</option>
                    {Object.keys(strains).map((key)=> <option value={strains[key].id}>{strains[key].name} </option>)}
                </select>
            <label id='checkinField'>Comment:</label>
                <input
                    id='checkinText'
                    type='textarea'
                    placeholder='Say something...'
                    value={text}
                    onChange={(e)=>setText(e.target.value)} />
            <button type='submit' id='checkInButton'>Submit</button>
        </form>
    )
}

export default CheckinForm
