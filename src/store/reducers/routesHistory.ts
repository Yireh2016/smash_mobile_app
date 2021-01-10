import { RESET_ROUTE_HISTORY, SET_ROUTE_HISTORY } from '../constants';

import { setRouteHistoryAction } from '../types/routesHistory';

const initialState: void[] = [];

const setRouteHistory = (action: setRouteHistoryAction) => action.payload;
const resetRoutesHistory = (voidArr: void[]) => voidArr;
export default (state = initialState, action: setRouteHistoryAction) => {
  switch (action.type) {
    case SET_ROUTE_HISTORY: {
      return setRouteHistory(action);
    }
    case RESET_ROUTE_HISTORY: {
      return resetRoutesHistory([]);
    }
    default:
      return state;
  }
};
