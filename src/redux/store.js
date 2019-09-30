import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/test';

// const rootReducer = combineReducers({
//   apiReducer: apiReducer,
//   uiReducer: uiReducer
// });

let composeEnhancer = compose;

// if on dev mode use dev tools
// if dev tools not available use comnpose
if (__DEV__) {
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(reducer, composeEnhancer(applyMiddleware(thunk)));
};

export default configureStore;