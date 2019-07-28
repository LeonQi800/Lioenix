import * as types from "./user.types";

const initialState = {
    isLoading: false,
    userInfo: {},
    isLogin: false,
    error: null,
};

const user = (state = initialState, action ={}) => {
    switch(action.type) {

        // fetch user info action
        case types.USER_INFO_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case types.USER_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLogin: true,
                userInfo: action.payload
            }

        case types.USER_INFO_FAILURE:
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