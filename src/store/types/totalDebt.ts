import { RESET_TOTAL_DEBT, SET_TOTAL_DEBT } from '../constants';

export interface SetTotalDebtAction {
  type: typeof SET_TOTAL_DEBT | typeof RESET_TOTAL_DEBT;
  payload: number | null;
}
