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
      <div className='weedia'>
        <NavLink exact to="/" className='homeButton'>unTokd</NavLink>
        <h3 className='socialWeedia'>the new social weedia</h3>
      </div>
        {isLoaded && sessionLinks}
    </ul>
  );
}

export default Navigation;
