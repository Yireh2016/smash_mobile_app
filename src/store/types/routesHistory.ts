import { SET_ROUTE_HISTORY, RESET_ROUTE_HISTORY } from '../constants';

export interface setRouteHistoryAction {
  type: typeof SET_ROUTE_HISTORY | typeof RESET_ROUTE_HISTORY;
  payload: string[] | void[];
}
