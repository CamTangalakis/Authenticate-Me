import React, { useEffect, useState } from 'react';
import * as checkinActions from '../../store/checkin';
import * as strainActions from '../../store/strain'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './checkin.css'

const CheckinForm = ({setShowModal}) => {
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const [strainId, setStrainId] = useState()
    const [rating, setRating] = useState(0)
    const [photo, setPhoto] = useState('')
    const [errors, setErrors] = useState([])

    const sessionUser = useSelector(state => state.session.user);
    const strains = useSelector(state => state.strain)
    const [userId] = useState(parseInt(sessionUser?.id))

    const onSubmit = async(e) => {
        e.preventDefault();

        if(text && strainId) {
            await dispatch(checkinActions.postCheckin({ userId, strainId, text, rating, photo }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                })
            setShowModal(false)
        } else {
            if(!text && !errors.includes('Please provide a comment.')) setErrors([...errors, 'Please provide a comment.'])
            if(!strainId && !errors.includes('Please provide a strain.')) setErrors([...errors, 'Please provide a strain.'])
        }
    }

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
                <select onChange={e=> setStrainId(e.target.value - 1)}>
                    <option selected='selected' value={null}>Select...</option>
                    {Object.keys(strains).map((key)=> <option value={strains[key].id}>{strains[key].name} </option>)}
                </select>

            <label id='checkinField'>Comment:</label>
                <textArea
                    id='checkinText'
                    placeholder='Say something...'
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                />

            <label id='checkinField'>Add Photo</label>
                <input
                    id='checkinText'
                    type='text'
                    placeholder='Add a photo...'
                    value={photo}
                    onChange={(e)=>setPhoto(e.target.value)}
                />

            <button type='submit' id='checkInButton'>Submit</button>
        </form>
    )
}

export default CheckinForm
