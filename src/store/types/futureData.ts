import { SET_FUTURE_DATA, RESET_FUTURE_DATA } from '../constants';
import { CardBalance } from '../../types/common/commonTypes';

export interface SetFuturureDataAction {
  type: typeof SET_FUTURE_DATA | typeof RESET_FUTURE_DATA;
  payload: CardBalance[];
}
