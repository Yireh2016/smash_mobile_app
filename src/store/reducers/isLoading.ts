import { SET_IS_LOADING } from '../constants';
import { SetIsLoadingAction } from '../types/isLoading';

const initialState: boolean = false;
const setIsLoading = (action: SetIsLoadingAction) => action.payload;

export default (state = initialState, action: SetIsLoadingAction) => {
  switch (action.type) {
    case SET_IS_LOADING: {
      return setIsLoading(action);
    }

    default:
      return state;
  }
};
