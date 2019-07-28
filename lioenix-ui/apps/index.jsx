import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createStore, applyMiddleware, compose} from "redux";
import reducers from "./store/reducers/reducer";
import apiMiddleware from "./store/middleware/api-middleware";

import App from "./components/App";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk, apiMiddleware))
);

ReactDOM.render( 
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app-root'));

// module.hot.accept();