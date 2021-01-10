import { SET_IS_LOADING } from '../constants';

export interface Loader {
  enable: boolean;
  message: string;
  title: string;
}
export interface SetIsLoadingAction {
  type: typeof SET_IS_LOADING;
  payload: boolean | Loader;
}
