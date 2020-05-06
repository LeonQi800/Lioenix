import {
  MODAL_OPEN_REQUEST,
  MODAL_CLOSE_REQUEST,
  SWITCH_LANGUAGE_TYPE,
} from "../../constants/actionTypes";

export const controlModalOpen = () => (dispatch) => {
  dispatch({
    type: MODAL_OPEN_REQUEST,
  });
};

export const controlModalClose = () => (dispatch) => {
  dispatch({
    type: MODAL_CLOSE_REQUEST,
  });
};

export const controlLanguageType = () => (dispatch) => {
  dispatch({
    type: SWITCH_LANGUAGE_TYPE,
  });
};
