import { Store } from '../types/main';

export const getLinkedAccounts = (store: Store) => store.accounts;

export const getUser = (store: Store) => store.user;

export const getCreditCards = (store: Store) => store.creditCards;

export const getIsUserAuthenticated = (store: Store) =>
  store.isUserAuthenticated;

export const getIsLoading = (store: Store) => store.isLoading;

export const getModal = (store: Store) => store.modal;

export const getGlobalAppConfig = (store: Store) => store.globalAppConfig;

export const getStatusBar = (store: Store) => store.statusBar;

export const getRoutesHistory = (store: Store) => store.routesHistory;

export const getPlan = (store: Store) => store.plan;

export const getFutureData = (store: Store) => store.futureDateData;

export const getTotalDebt = (store: Store) => store.totalDebt;

export const getAccounts = (store: Store) => store.accounts;
