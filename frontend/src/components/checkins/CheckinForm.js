import React, { useState } from 'react';
import * as sessionActions from '../../store/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const CheckinForm = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    const [text, setText] = useState('')
    const [userId, setUserId] = useState(0)
    const [strainId, setStrainId] = useState(0)

    const onSubmit = async(e) => {
        e.preventDefault()
        setUserId(sessionUser.id)

        return dispatch(sessionActions.postCheckin({ userId, strainId, text }));
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Choose a Strain:</label>
                {/* <select />
                    <option>
                        </option>
                        this option sets the strain id for the checkin*/}
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
