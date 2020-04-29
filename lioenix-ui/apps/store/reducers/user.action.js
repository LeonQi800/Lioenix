import {GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAILURE,
        USER_SIGN_UP_REQUEST, USER_SIGN_UP_SUCCESS, USER_SIGN_UP_FAILURE,
        CHECK_EMAIL_REQUEST, CHECK_EMAIL_SUCCESS, CHECK_EMAIL_FAILURE} from '../../constants/actionTypes';
import { apiRootURL } from '../../config/setting';
import axios from 'axios';

export const fetchUserInfo = user => dispatch => {
    dispatch({
        type: GET_USER_INFO_REQUEST,
    });
    axios({
        method: 'post',
        url: apiRootURL+'user/login',
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

export const signUpUser = user => dispatch => {
    dispatch({
        type: USER_SIGN_UP_REQUEST,
    });
    axios({
        method: 'post',
        url: apiRootURL+'user/signup',
        data: {
            user: user
        }
    })
        .then(res => {
            return dispatch({
                type: USER_SIGN_UP_SUCCESS,
                value: res
            })
        })
        .catch(err => {
            return dispatch({
                type: USER_SIGN_UP_FAILURE,
                value: err
            })
        });
}

export const checkEmail = user => dispatch => {
    dispatch({
        type: CHECK_EMAIL_REQUEST,
    });
    axios({
        method: 'post',
        url: apiRootURL+'user/checkEmail',
        data: {
            user: user
        }
    })
        .then(res => {
            return dispatch({
                type: CHECK_EMAIL_SUCCESS,
                value: res
            })
        })
        .catch(err => {
            return dispatch({
                type: CHECK_EMAIL_FAILURE,
                value: err
            })
        });
}