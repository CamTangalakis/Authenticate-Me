import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import SignupFormPage from "./components/signupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/navigation";

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
        <Routes>
          {/* <Route path="/signup">
            <p> HELLOOOOO </p>
            <SignupFormPage />
          </Route> */}
        </Routes>
      )}
    </>
  );
}

export default App;
