import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { Route, Routes } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/navigation/index";
import Feed from "./components/feed/index";
import SideBar from './components/feed/sideBar'
import './index.css'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <div className='page'>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
      <div className='feed'>
        <Feed className='feedItems'/>
        <SideBar className='sideBar'/>
      </div>
          // <Routes>
          //   <Route exact path="/">
          //   </Route>
          // </Routes>
      )}
    </div>
  );
}

export default App;
