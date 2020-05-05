import {MODAL_OPEN_REQUEST, MODAL_CLOSE_REQUEST, SWITCH_LANGUAGE_TYPE} from "../../constants/actionTypes"

const initialState = {
    isModalOpened: false,
    isEnglish: true
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
        case SWITCH_LANGUAGE_TYPE:
            return {
                ...state,
                isEnglish: !state.isEnglish
            }
        default:
            return state;
    }
}

export default general;