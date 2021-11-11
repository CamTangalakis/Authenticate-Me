import React, { useState } from 'react';
import * as checkinActions from '../../store/checkin';
import { useDispatch, useSelector } from 'react-redux';
import './checkin.css'

const StrainCheckinForm = ({setShowModal, strain}) => {
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const [errors, setErrors] = useState([])
    const sessionUserId = useSelector(state=> state.session.user.id)

    const onSubmit = async(e) => {
        e.preventDefault()

        if(!text) setErrors('Please provide a comment.')
        else {
            setErrors([])
            await dispatch(checkinActions.postCheckin({userId: sessionUserId, strainId: strain.id - 1, text}))
            setShowModal(false)
        }
    }

    return (
        <form onSubmit={onSubmit} className='checkinForm'>
            <h2 id='checkinHeader'>Check In</h2>
            <h3>{strain.name}</h3>

            {errors ? <p>{errors}</p> : null}

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

export default StrainCheckinForm
