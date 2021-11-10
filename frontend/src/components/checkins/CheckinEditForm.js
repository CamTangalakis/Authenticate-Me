import React, { useState } from 'react';
import * as checkinActions from '../../store/checkin';
import { useDispatch } from 'react-redux';
import './checkin.css'
// import '../../context/Modal.css'

const CheckinForm = ({id}) => {
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const [strain, setStrain] = useState('kuuuush')

    const onSubmit = async(e) => {
        e.preventDefault()
        return dispatch(checkinActions.editCheckin({ text, id}));
    }

    return (
        <form onSubmit={onSubmit} className='checkinForm'>
            <h2 id='checkinHeader'>Check In</h2>
            <h3>{strain}</h3>
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
