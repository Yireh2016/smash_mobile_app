import theme from '../../theme/theme';
import { SET_STATUS_BAR } from '../constants';

import {
  SetStatusBarAction,
  StatusBarInterface,
  statusBarStyle,
} from '../types/statusBar';

const initialState: StatusBarInterface = {
  background: theme.palette.primary,
  style: statusBarStyle.LIGHT,
};
const setStatusBar = (action: SetStatusBarAction) => action.payload;

export default (state = initialState, action: SetStatusBarAction) => {
  switch (action.type) {
    case SET_STATUS_BAR: {
      return setStatusBar(action);
    }

    default:
      return state;
  }
};
