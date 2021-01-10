import { SET_TOTAL_DEBT, RESET_TOTAL_DEBT } from '../constants';
import { SetTotalDebtAction } from '../types/totalDebt';

const initialState: number = 0;
const SetTotalDebt = (action: SetTotalDebtAction) => action.payload;
const resetTotalDebt = () => 0;
export default (state = initialState, action: SetTotalDebtAction) => {
  switch (action.type) {
    case SET_TOTAL_DEBT: {
      return SetTotalDebt(action);
    }

    case RESET_TOTAL_DEBT: {
      return resetTotalDebt();
    }

    default:
      return state;
  }
};
