import * as types from "./user.types";
import axios from "axios";

export const fetchUserInfo = () => (dispatch) => {
    return dispatch({
        types: [
            types.USER_INFO_FAILURE,
            types.USER_INFO_REQUEST,
            types.USER_INFO_SUCCESS
        ],
        request: {
            method: "POST",
            endpoint: "https://localhost:9000/user/signin"
        }
    })
}


export const userLogin = ({userName, password}) => {
    return (dispatch) => {
        console.log(userName, password);

        axios.post("https://localhost:9000/user/signin", {
            userName: userName,
            password: password
        })
        // .then(res => res.json())
        .then(user => {
            dispatch({
                type: [
                    types.USER_LOGIN_FAILURE,
                    types.USER_LOGIN_REQUEST,
                    types.USER_LOGIN_SUCCESS
                ],
                payload: user
            })
        })
    }
}