import * as types from "./user.types";

const initialState = {
    isLoading: false,
    userInfo: [],
    error: null,
};

const user = (state = initialState, action ={}) => {
    switch(action.type) {
        case types.USER_INFO_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case types.USER_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userInfo: action.payload
            }

        case types.USER_INFO_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }

        case types.USER_LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case types.USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userInfo: action.payload
            }

        case types.USER_LOGIN_FAILURE:
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