import { SET_ACCOUNTS, RESET_ACCOUNTS } from '../constants';
import { SetAccountAction, Account } from '../types/accounts';

const initialState: Account[] | null = null;
const setAccount = (action: SetAccountAction) => action.payload;
const resetAccount = () => null;

export default (state = initialState, action: SetAccountAction) => {
  switch (action.type) {
    case SET_ACCOUNTS: {
      return setAccount(action);
    }
    case RESET_ACCOUNTS: {
      return resetAccount();
    }
    default:
      return state;
  }
};
