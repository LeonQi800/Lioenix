import {combineReducers} from 'redux';
// import {connectRouter} from 'connected-react-router';

import user from './reducers/user';
import general from './reducers/general';

export default combineReducers({
    user,
    general
});

// const createRootReducer = history => {
//     combineReducers({
//         router: connectRouter(history),
//         user
//     });
// }

// export default createRootReducer;