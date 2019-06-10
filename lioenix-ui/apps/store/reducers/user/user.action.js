import * as types from "./user.types";

export const fetchUserInfo = () => (dispatch) => {
    return dispatch({
        types: [
            types.USER_INFO_FAILURE,
            types.USER_INFO_REQUEST,
            types.USER_INFO_SUCCESS
        ],
        request: {
            method: "POST",
            endpoint: "lioenix/user.josn"
        }
    })
}