import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger()))
);
