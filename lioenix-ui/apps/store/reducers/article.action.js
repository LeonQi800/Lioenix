import {
    GET_USER_ARTICLE_REQUEST,
    GET_USER_ARTICLE_SUCCESS,
    GET_USER_ARTICLE_FAILURE
} from "../../constants/actionTypes";

export const getUserArticle = () => dispatch => {

    dispatch({
        type: GET_USER_ARTICLE_SUCCESS
    })
}