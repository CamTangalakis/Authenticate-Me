import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import sessionReducer from './session'
import checkinReducer from './checkin'
import commentReducer from './comment'
import strainReducer from './strain';
// import favStrainReducer from './favStrain'

const rootReducer = combineReducers({
    session: sessionReducer,
    checkin: checkinReducer,
    comment: commentReducer,
    strain: strainReducer,
    // favStrain: favStrainReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
  };

  export default configureStore;
