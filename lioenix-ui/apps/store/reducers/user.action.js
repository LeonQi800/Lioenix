import {GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAILURE} from '../../constants/actionTypes';
import { apiRootURL } from '../../config/setting';
import axios from 'axios';

export const fetchUserInfo = user => dispatch => {
    dispatch({
        type: GET_USER_INFO_REQUEST,
    });
    axios({
        method: 'post',
        url: apiRootURL+'user/signin',
        data: {
            user: user
        }
    })
        .then(res => {
            return dispatch({
                type: GET_USER_INFO_SUCCESS,
                value: res
            })
        })
        .catch(err => {
            return dispatch({
                type: GET_USER_INFO_FAILURE,
                value: err
            })
        });
}

// export const fetchUserInfo = (user) => (dispatch) => {
//     return dispatch({
//         types: [
//             GET_USER_INFO_REQUEST,
//             GET_USER_INFO_SUCCESS,
//             GET_USER_INFO_FAILURE,
//         ],
//         request: {
//             method: "POST",
//             endpoint: "user/signin",
//             body: {
//                 user
//             }
//         }
//     })
// }