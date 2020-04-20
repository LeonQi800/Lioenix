import {GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAILURE} from '../../constants/actionTypes';

const initialState = {
    isLoading: false,
    userInfoStore: {},
    isLogin: false,
    error: null,
};

const user = (state = initialState, action ={}) => {
    switch(action.type) {

        // fetch user info action
        case GET_USER_INFO_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case GET_USER_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLogin: true,
                userInfoStore: action.value.data
            }

        case GET_USER_INFO_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }

        default:
            return state;
    }
}

export default user;