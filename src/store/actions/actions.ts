import store from '../store';
import {
  SET_APP_CONFIG,
  SET_ACCOUNTS,
  SET_USER,
  SET_USER_CREATED_AT,
  SET_CREDIT_CARDS,
  SET_IS_USER_AUTH,
  SET_IS_LOADING,
  RESET_ACCOUNTS,
  RESET_USER,
  RESET_CREDIT_CARDS,
  RESET_IS_USER_AUTH,
  RESET_ROUTE_HISTORY,
  RESET_FUTURE_DATA,
  RESET_TOTAL_DEBT,
  SET_MODAL,
  SET_STATUS_BAR,
  SET_ROUTE_HISTORY,
  SET_PLAN,
  RESET_PLAN,
  SET_FUTURE_DATA,
  SET_TOTAL_DEBT,
} from '../constants';
import { GlobalAppConfig } from '../types/globalAppConfig';
import { Account } from '../types/accounts';
import { User } from '../types/user';
import { Card } from '../../types/Card';
import { ModalInterface } from '../types/modal';
import { StatusBarInterface } from '../types/statusBar';
import { PlanStore } from '../../types/Plan';
import { CardBalance } from '../../types/common/commonTypes';
import { Loader } from '../types/isLoading';

const makeActionCreator = (action: any) =>
  store.dispatch({ type: action.type, payload: action.payload });

export const setGlobalAppConfig = (config: GlobalAppConfig | null) =>
  makeActionCreator({
    type: SET_APP_CONFIG,
    payload: config,
  });

export const setAccounts = (accounts: Account[]) =>
  makeActionCreator({
    type: SET_ACCOUNTS,
    payload: accounts,
  });

export const setUser = (user: User) =>
  makeActionCreator({
    type: SET_USER,
    payload: user,
  });

export const setUserCreatedAt = (date: string) =>
  makeActionCreator({
    type: SET_USER_CREATED_AT,
    payload: date,
  });

export const setCreditCards = (creditCards: Card[]) =>
  makeActionCreator({
    type: SET_CREDIT_CARDS,
    payload: creditCards,
  });

export const resetAccount = () =>
  makeActionCreator({
    type: RESET_ACCOUNTS,
  });

export const resetUser = () =>
  makeActionCreator({
    type: RESET_USER,
  });

export const resetCreditCards = () =>
  makeActionCreator({
    type: RESET_CREDIT_CARDS,
  });

export const resetIsUserAuth = () => {
  makeActionCreator({
    type: RESET_IS_USER_AUTH,
  });
};

export const resetRouteHistory = () => {
  makeActionCreator({
    type: RESET_ROUTE_HISTORY,
  });
};

export const resetPlan = () => {
  makeActionCreator({
    type: RESET_PLAN,
  });
};

export const resetFutureData = () => {
  makeActionCreator({
    type: RESET_FUTURE_DATA,
  });
};

export const resetTotalDebt = () => {
  makeActionCreator({
    type: RESET_TOTAL_DEBT,
  });
};

export const setIsUserAuthenticated = (isUserAuthenticated: boolean) =>
  makeActionCreator({
    type: SET_IS_USER_AUTH,
    payload: isUserAuthenticated,
  });

export const setIsLoading = (isLoading: Loader | boolean) =>
  makeActionCreator({
    type: SET_IS_LOADING,
    payload: isLoading,
  });

export const setModal = (modal: ModalInterface) =>
  makeActionCreator({
    type: SET_MODAL,
    payload: modal,
  });

export const setStatusBar = (statusBar: StatusBarInterface) =>
  makeActionCreator({
    type: SET_STATUS_BAR,
    payload: statusBar,
  });

export const setRoutesHistory = (routesHistory: string[]) =>
  makeActionCreator({
    type: SET_ROUTE_HISTORY,
    payload: routesHistory,
  });

export const setPlanOnStore = (plan: PlanStore) =>
  makeActionCreator({
    type: SET_PLAN,
    payload: plan,
  });

export const setFutureData = (futureDateData: CardBalance[]) =>
  makeActionCreator({
    type: SET_FUTURE_DATA,
    payload: futureDateData,
  });

export const setTotalDebt = (totalDebt: number) =>
  makeActionCreator({
    type: SET_TOTAL_DEBT,
    payload: totalDebt,
  });
