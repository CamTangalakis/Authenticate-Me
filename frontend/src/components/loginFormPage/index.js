import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';

const LoginFormPage = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])

    // if (sessionUser) return (
    //     <Redirect to="/" />
    //   );

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
        <form onSubmit={onSubmit}>
            <ul>
                {errors.map(e=> <li key={e}>{e}</li>)}
            </ul>
            <label>Username:</label>
                <input
                    type='text'
                    placeholder='Enter username or email'
                    value={credential}
                    onChange={(e)=>setCredential(e.target.value)} />
            <label>Password:</label>
                <input
                    type='text'
                    placeholder='Enter password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)} />
            <button type='submit'>Login</button>
        </form>
    )
}

export default LoginFormPage
