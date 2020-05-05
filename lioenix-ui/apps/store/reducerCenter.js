import {combineReducers} from 'redux';
// import {connectRouter} from 'connected-react-router';

import user from './reducers/user';
import general from './reducers/general';
import article from './reducers/article';

export default combineReducers({
    user,
    general,
    article
});

// const createRootReducer = history => {
//     combineReducers({
//         router: connectRouter(history),
//         user
//     });
// }

// export default createRootReducer;