import { SET_MODAL } from '../constants';

export enum ModalType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
}
export interface ModalInterface {
  show: boolean;
  message: string;
  type: ModalType;
}

export interface SetModalAction {
  type: typeof SET_MODAL;
  payload: ModalInterface;
}
