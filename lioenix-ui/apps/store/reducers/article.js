import {
    GET_USER_ARTICLE_REQUEST,
    GET_USER_ARTICLE_SUCCESS,
    GET_USER_ARTICLE_FAILURE
} from "../../constants/actionTypes";


const initialState = {
    isLoading: false,
    error: null,
    isError: false,
    userArticle: []
  };

const article = (state = initialState, action = {}) => {
    switch (action.type){
        case GET_USER_ARTICLE_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case GET_USER_ARTICLE_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                // userArticle: action.value.data
                userArticle: [
                    {
                        authorize: {
                            "user": {
                                "username": "a",
                                "email": "a@gmail.com",
                                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYTkxZTc1OGVhMDI3MmM2Y2JhOTI3NyIsImVtYWlsIjoiYUBnbWFpbC5jb20iLCJleHAiOjE1OTM3NTM3NTQsImlhdCI6MTU4ODU2OTc1NH0.xKs0VMQvwXgsk7AbdauuMaiVnNTqr4_jBRll_ly-xYo"
                            }
                        },
                        title: "this is test article for user 001",
                        body: "this is test body for user article 001",
                        comments: [],
                        tagList: [],
                        favoritesCount: 100,
                        viewCount: 3000,
                        isFavorite: true,
                        createdAt: 1588570938881,
                        updatedAt: 1588570938881,
                    }
                ]
            }
        case GET_USER_ARTICLE_FAILURE:
            return {
                ...state,
                isError: true,
                error: action.value
            }
        default:
            return state;
    }
}

export default article;