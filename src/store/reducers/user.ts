import { SET_USER, SET_USER_CREATED_AT, RESET_USER } from '../constants';
import { SetUserAction, User, SetCreatedAtAction } from '../types/user';
import rfdc from 'rfdc';
// import { setIsUserAuthenticated } from '../actions/actions';

const initialState: User | null = null;

const setUser = (action: SetUserAction) => action.payload;

const setUserCreatedAt = (state: string | null, action: SetCreatedAtAction) => {
  const clone = rfdc();
  const clonedState = clone(state);
  if (clonedState) {
    clonedState.createdAt = action.payload;
  }
  return clonedState;
};

const resetUser = () => null;

export default (
  state = initialState,
  action: SetUserAction | SetCreatedAtAction
): any => {
  switch (action.type) {
    case SET_USER: {
      return setUser(action);
    }
    case SET_USER_CREATED_AT: {
      return setUserCreatedAt(state, action);
    }
    case RESET_USER: {
      return resetUser();
    }
    default:
      return state;
  }
};
