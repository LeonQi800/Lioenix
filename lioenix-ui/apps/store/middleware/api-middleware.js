/* tempoary not using */ 

import axios from "axios";

const BASE_URL = "https://localhost:9000/";
const headers = {
    "Accept": "aaplication/json, text/plain, */*",
    "Content-type": "application/json"
};

export const invoke = ({endpoint, method = "GET"}, body = {}) => {
    const url = `${BASE_URL}${endpoint}`;
    const params = {
        method,
        url,
        data: body,
        headers
    };

    return axios(params)
                .then((response) => Promise.resolve(response))
                .catch(error => Promise.reject(error))
}

const apiMiddleware = (store) => (next) => (action) => {
    const {request} = action

    if (!request){
        return next(action);
    }

    const {
        request: {method, endpoint, body},
        types: [REQUEST, SUCCESS, FAILURE]
    } = action;

    next ({types: REQUEST});

    return invoke({method, body, endpoint})
        .then((response) => {
            return (response.status >=200 && response.status < 300) ? 
                next({type: SUCCESS, payload: response.data}) : next({type: FAILURE, error: response.data})
        })
        .catch((error) => next({type: FAILURE, error}));
}

export default apiMiddleware;

