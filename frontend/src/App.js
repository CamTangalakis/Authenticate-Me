import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { Route, Routes } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/navigation/index";
import Feed from "./components/feed/index";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
      <Feed />
          // <Routes>
          //   <Route exact path="/">
          //   </Route>
          // </Routes>
      )}
    </>
  );
}

export default App;
