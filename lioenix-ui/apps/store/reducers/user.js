import {GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAILURE,
        USER_SIGN_UP_REQUEST, USER_SIGN_UP_SUCCESS, USER_SIGN_UP_FAILURE} from '../../constants/actionTypes';

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
        case USER_SIGN_UP_REQUEST:
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
        case USER_SIGN_UP_SUCCESS:
            return {
                ...state,
                isLoading: false,
            }
        case USER_SIGN_UP_FAILURE:
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