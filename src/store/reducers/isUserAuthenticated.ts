import { SET_IS_USER_AUTH, RESET_IS_USER_AUTH } from '../constants';

import { SetIsUSerAuthAction } from '../types/user';

const initialState = null;

const setIsUserAuth = (action: SetIsUSerAuthAction) => action.payload;
export default (state = initialState, action: SetIsUSerAuthAction) => {
  switch (action.type) {
    case SET_IS_USER_AUTH: {
      return setIsUserAuth(action);
    }
    case RESET_IS_USER_AUTH: {
      return setIsUserAuth({ type: RESET_IS_USER_AUTH, payload: false });
    }
    default:
      return state;
  }
};
