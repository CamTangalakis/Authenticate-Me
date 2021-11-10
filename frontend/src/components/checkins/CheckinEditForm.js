import React, { useState } from 'react';
import * as checkinActions from '../../store/checkin';
import { useDispatch, useSelector } from 'react-redux';
import './checkin.css'
// import '../../context/Modal.css'

const CheckinEditForm = ({checkin, setShowModal}) => {
    const dispatch = useDispatch()
    const [text, setText] = useState(checkin.text)
    const [strainId, setStrainId] = useState(checkin.strainId)
    const strains = useSelector(state => state.strain)
    // console.log(checkin.id, text, '<-------------')

    const onSubmit = async(e) => {
        e.preventDefault()
        const id = checkin.id
        await dispatch(checkinActions.editCheckin( text, id ));
        setShowModal(false)
    }

    return (
        <form onSubmit={onSubmit} className='checkinForm'>
            <h2 id='checkinHeader'>Check In</h2>
            <h3>{strains[strainId].name}</h3>
            <label id='checkinField'>Comment:</label>
                <input
                    id='checkinText'
                    type='textarea'
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                    />
            <button type='submit' id='checkInButton'>Submit</button>
        </form>
    )
}

export default CheckinEditForm
