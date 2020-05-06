import {
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILURE,
  USER_SIGN_UP_REQUEST,
  USER_SIGN_UP_SUCCESS,
  USER_SIGN_UP_FAILURE,
  CHECK_EMAIL_REQUEST,
  CHECK_EMAIL_SUCCESS,
  CHECK_EMAIL_FAILURE,
} from "../../constants/actionTypes";

const initialState = {
  isLoading: false,
  userInfoStore: {},
  isLogin: false,
  error: null,
  isError: false,
  isEmailExist: false,
  isRegistered: false,
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    // fetch user info action
    case GET_USER_INFO_REQUEST:
    case USER_SIGN_UP_REQUEST:
    case CHECK_EMAIL_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        userInfoStore: action.value.data,
      };
    case USER_SIGN_UP_SUCCESS:
      return {
        ...state,
        isLogin: true,
        isLoading: false,
        isRegistered: true,
      };
    case USER_SIGN_UP_FAILURE:
    case GET_USER_INFO_FAILURE:
    case CHECK_EMAIL_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.value,
        isError: true,
      };
    case CHECK_EMAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isEmailExist: true,
      };
    default:
      return state;
  }
};

export default user;
