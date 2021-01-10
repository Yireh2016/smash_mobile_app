import { SET_MODAL } from '../constants';

import { SetModalAction, ModalInterface, ModalType } from '../types/modal';

const initialState: ModalInterface = {
  show: false,
  message: '',
  type: ModalType.SUCCESS,
};
const setModal = (action: SetModalAction) => action.payload;

export default (state = initialState, action: SetModalAction) => {
  switch (action.type) {
    case SET_MODAL: {
      return setModal(action);
    }

    default:
      return state;
  }
};
