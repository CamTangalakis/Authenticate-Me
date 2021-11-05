// import { useDispatch } from "react-redux";
// import React, { useState, useEffect } from "react";
// import * as sessionActions from "./store/session";
import {Route, Routes} from 'react-router-dom'
import LoginFormPage from './components/loginFormPage';
import SignUpFormPage from './components/signupFormPage';

function App() {
  // const dispatch = useDispatch();
  // const [isLoaded, setIsLoaded] = useState(false);
  // useEffect(() => {
  //   dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  // }, [dispatch]);

  return (
    <>
      <h1>Hello from App</h1>
      <Routes>
        <Route exact path='/login' element={<LoginFormPage />} />
        <Route path='/signup' element={<SignUpFormPage />} />
      </Routes>
    </>
  );
}

export default App;
