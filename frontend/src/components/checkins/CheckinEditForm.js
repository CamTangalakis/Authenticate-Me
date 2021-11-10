import React, { useEffect, useState } from 'react';
import * as checkinActions from '../../store/checkin';
import * as strainActions from '../../store/strain'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './checkin.css'

const CheckinForm = ({id}) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    const [text, setText] = useState('')
    // const [strains, setStrains] = useState()
    const strains = useSelector(state => state.strain)
    // const checkin = useSelector(state => state.checkin)
    // console.log(checkin)

    const onSubmit = async(e) => {
        e.preventDefault()
        return dispatch(checkinActions.editCheckin({ text, id}));
    }

    return (
        <form onSubmit={onSubmit} className='checkinForm'>
            <h2 id='checkinHeader'>Check In</h2>
            <label id='checkinField'>Comment:</label>
                <input
                    id='checkinText'
                    type='textarea'
                    placeholder={text}
                    value={text}
                    onChange={(e)=>setText(e.target.value)} />
            <button type='submit' id='checkInButton'>Submit</button>
        </form>
    )
}

export default CheckinForm
