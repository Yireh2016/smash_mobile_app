import { SET_STATUS_BAR } from '../constants';

export enum statusBarStyle {
  LIGHT = 'light-content',
  DARK = 'dark-content',
  DEFAULT = 'default',
}

export interface StatusBarInterface {
  background: string;
  style: statusBarStyle;
}

export interface SetStatusBarAction {
  type: typeof SET_STATUS_BAR;
  payload: StatusBarInterface;
}
