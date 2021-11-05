import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { NavLink, Route, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import {addUser} from '../../store/session';
import * as sessionActions from '../../store/session';

const LoginFormPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const sessionUser = useSelector(state=> state.session.user)
    const [credential, setCredential] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])

    if(sessionUser) navigate('/')

    const onSubmit = async(e) => {
        e.preventDefault()
        setErrors([])

        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                console.log(data.errors)
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