import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './profileButton';
import LoginFormModal from '../loginFormPage';
import SignUpFormModal from '../signupFormPage/index';
import CheckinFormModal from '../checkins/index';
import * as sessionActions from '../../store/session';
import './Navigation.css';

function Navigation({ isLoaded }){
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user);

  const loginGuest = async(e) => {
    e.preventDefault()

    return dispatch(sessionActions.login({credential: 'Demo-used', password: 'password'}));
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div id='checkinButton'>
        <CheckinFormModal id='formButton'/>
        <ProfileButton id='formButton' user={sessionUser} />
      </div>
    );
  } else {
    sessionLinks = (
      <div id='formButtons'>
        <LoginFormModal id='formButton'/>
        <SignUpFormModal id='formButton'/>
        <button type='button' id='formButton' onClick={loginGuest}>Guest User</button>
      </div>
    );
  }

  return (
    <ul className='navBar'>
        <NavLink exact to="/home" className='homeButton'><img width='100px' height='35px' src='https://user-images.githubusercontent.com/85664060/151060608-818f19af-50b7-4a8e-897d-2ae7c381906d.png'></img></NavLink>
        {isLoaded && sessionLinks}
    </ul>
  );
}

export default Navigation;
