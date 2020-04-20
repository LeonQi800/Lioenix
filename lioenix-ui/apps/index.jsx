import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';

import App from './components/App';
import { store } from './store/configureStore';


ReactDOM.render( 
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app-root'));

// module.hot.accept();
