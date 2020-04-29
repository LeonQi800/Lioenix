import {MODAL_OPEN_REQUEST, MODAL_CLOSE_REQUEST} from "../../constants/actionTypes"

const initialState = {
    isModalOpened: false
}

const general = (state = initialState, action ={}) => {
    switch(action.type) {

        // fetch user info action
        case MODAL_OPEN_REQUEST:
            return {
                ...state,
                isModalOpened: true
            };
        case MODAL_CLOSE_REQUEST:
            return {
                ...state,
                isModalOpened: false,
            }
        default:
            return state;
    }
}

export default general;