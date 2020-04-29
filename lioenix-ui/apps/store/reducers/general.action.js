import {MODAL_OPEN_REQUEST, MODAL_CLOSE_REQUEST} from "../../constants/actionTypes";

export const controlModalOpen = () => dispatch => {
    dispatch({
        type: MODAL_OPEN_REQUEST,
    });
}

export const controlModalClose = () => dispatch => {
    dispatch({
        type: MODAL_CLOSE_REQUEST,
    });
}
