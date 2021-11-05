import { useState } from 'react';
import { useDispatch } from 'react-redux';

import * as sessionActions from '../../store/session';

const SignUpFormPage = () => {
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState([])

    const onSubmit = async(e) => {
        e.preventDefault()
        if(password === confirmPassword){
            setErrors([])

            return dispatch(sessionActions.signup({username, email, password}))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
          });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    }

    return (
        <form onSubmit={onSubmit}>
            <ul>
                {errors.map(e=> <li key={e}>{e}</li>)}
            </ul>
            <label>Username:</label>
                <input
                    type='text'
                    placeholder='Enter username'
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)} />
            <label>Email:</label>
                <input
                    type='text'
                    placeholder='Enter username'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)} />
            <label>Password:</label>
                <input
                    type='text'
                    placeholder='Enter password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)} />
            <label>Confirm Password:</label>
                <input
                    type='text'
                    placeholder='Enter username'
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)} />
            <button type='submit'>Sign Up</button>
        </form>
    )
}

export default SignUpFormPage
