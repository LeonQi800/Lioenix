import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'connected-react-router'; 
import thunk from 'redux-thunk';

import reducers from './reducerCenter';
// import apiMiddleware from './middleware/api-middleware';
// import { createBrowserHistory } from 'history';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(routerMiddleware(history), thunk);
  } else {
    return composeEnhancers(applyMiddleware(routerMiddleware(history), thunk, createLogger()));
  }
};

export const store = createStore(
  reducers, getMiddleware());