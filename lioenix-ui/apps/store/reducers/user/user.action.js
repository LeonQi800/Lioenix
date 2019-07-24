import * as types from "./user.types";

export const fetchUserInfo = (user) => (dispatch) => {
    return dispatch({
        types: [
            types.USER_INFO_REQUEST,
            types.USER_INFO_SUCCESS,
            types.USER_INFO_FAILURE,
        ],
        request: {
            method: "POST",
            endpoint: "user/signin",
            body: {
                user
            }
        }
    })
}


export const userLogin = (user) => (dispatch) => {
    return dispatch({
        types: [
            types.USER_LOGIN_REQUEST,
            types.USER_LOGIN_SUCCESS,
            types.USER_LOGIN_FAILURE,
        ],
        request: {
            method: "POST",
            endpoint: "user/signin.json",
            body: {
                user
            }
        }
    })
};