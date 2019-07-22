/* tempoary not using */ 

import axios from "axios";

const headers = {
    "Accept": "aaplication/json, text/plain, */*",
    "Content-type": "application/json",
    "autorizacion": "lioenix"
};


export const invoke = ({endpoint, method = "GET", body = {}, responseType="json" }) => {
    const url = endpoint;
    const baseURL = "//localhost:9000/lioenix/";
    const params = {
        baseURL,
        method,
        url,
        data: body,
        headers,
        responseType
    };

    return axios(params)
                .then((response) => Promise.resolve(response))
                .catch(error => Promise.reject(error));
}

const apiMiddleware = (store) => (next) => (action) => {
    const {request} = action

    if (!request){
        return next(action);
    }

    const {
        request: {method, endpoint, body, responseType},
        types: [REQUEST, SUCCESS, FAILURE],
        ...rest
    } = action;

    next ({type: REQUEST});

    return invoke({method, body, endpoint, responseType})
        .then((response) => {
            return (response.status >=200 && response.status < 400) ? 
                next({type: SUCCESS, payload: response.data, headers: response.headers, ...rest}) : next({type: FAILURE, error: response.data})
        })
        .catch((error) => next({type: FAILURE, error, ...rest}));
}

export default apiMiddleware;

