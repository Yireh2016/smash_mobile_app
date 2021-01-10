//CardBalance[]

import { CardBalance } from '../../types/common/commonTypes';
import { SET_FUTURE_DATA, RESET_FUTURE_DATA } from '../constants';
import { SetFuturureDataAction } from '../types/futureDateData';

const initialState: CardBalance[] | null = null;
const setFutureData = (action: SetFuturureDataAction) => action.payload;
const resetFutureData = () => null;

export default (state = initialState, action: SetFuturureDataAction) => {
  switch (action.type) {
    case SET_FUTURE_DATA: {
      return setFutureData(action);
    }
    case RESET_FUTURE_DATA: {
      return resetFutureData();
    }
    default:
      return state;
  }
};
