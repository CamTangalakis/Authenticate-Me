import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import './login.css'

const LoginFormPage = () => {
    const dispatch = useDispatch()
    const [credential, setCredential] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])

    const onSubmit = async(e) => {
        e.preventDefault()
        setErrors([])

        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
      });
    }

    return (
        <form className='loginForm' onSubmit={onSubmit}>
            <ul>
                {errors.map(e=> <li key={e}>{e}</li>)}
            </ul>
            <h3 id='loginHeader'>Log In: </h3>
            <label id='loginField'>Username:</label>
                <input
                    type='text'
                    placeholder='Enter username or email'
                    value={credential}
                    onChange={(e)=>setCredential(e.target.value)} />
            <label id='loginField'>Password:</label>
                <input
                    type='password'
                    placeholder='Enter password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)} />
            <button type='submit' id='loginButton'>Login</button>
        </form>
    )
}

export default LoginFormPage
