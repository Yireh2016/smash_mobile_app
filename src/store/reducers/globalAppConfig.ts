import { SET_APP_CONFIG } from '../constants';
import {
  SetGlobalAppConfigAction,
  GlobalAppConfig,
} from '../types/globalAppConfig';

const initialState: GlobalAppConfig | null = null;
const setGlobalAppConfig = (action: SetGlobalAppConfigAction) => action.payload;

export default (state = initialState, action: SetGlobalAppConfigAction) => {
  switch (action.type) {
    case SET_APP_CONFIG: {
      return setGlobalAppConfig(action);
    }

    default:
      return state;
  }
};
