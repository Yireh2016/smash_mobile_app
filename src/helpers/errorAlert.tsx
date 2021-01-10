// import { Alert } from 'react-native';
import { setModal } from '../store/actions/actions';
import { ModalType } from '../store/types/modal';
import axiosErrorProcessing from './axiosErrorProcessing';

interface ErrorResponse {
  data?: any;
  status?: string;
  headers?: string;
}
export interface ErrorInterface {
  message?: string;
  onPress?(): void;
  response?: ErrorResponse;
  request?: string;
}

const errorAlert = (error: ErrorInterface): void => {
  let errorMessage = axiosErrorProcessing(error);
  setModal({
    show: true,
    message: errorMessage,
    type: ModalType.ERROR,
  });
};

export default errorAlert;
