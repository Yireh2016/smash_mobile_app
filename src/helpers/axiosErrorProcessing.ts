import { ErrorInterface } from './errorAlert';
import logger from './logger/logger';

export default (error: ErrorInterface) => {
  let errorMessage;
  if (error?.response?.data?.message) {
    errorMessage = error.response.data.message;
    logger({
      str: 'error data message',
      type: 'error',
      obj: { errorMessage },
    });
  } else if (error?.request) {
    // The request was made but no response was received
    errorMessage = JSON.stringify(error.request);
    logger({
      str: 'error request',
      type: 'error',
      obj: { errorMessage },
    });
  } else if (error?.message) {
    // Something happened in setting up the request that triggered an Error
    errorMessage = JSON.stringify(error.message);
    logger({
      str: 'error message',
      type: 'error',
      obj: { errorMessage },
    });
  } else {
    errorMessage = 'Unknown error, please try again later';
    logger({
      str: 'unk error',
      type: 'error',
      obj: { errorMessage },
    });
  }

  return errorMessage;
};
