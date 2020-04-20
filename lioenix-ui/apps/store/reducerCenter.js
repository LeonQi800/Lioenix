import {combineReducers} from 'redux';
// import {connectRouter} from 'connected-react-router';

import user from './reducers/user';

export default combineReducers({
    user
});

// const createRootReducer = history => {
//     combineReducers({
//         router: connectRouter(history),
//         user
//     });
// }

// export default createRootReducer;