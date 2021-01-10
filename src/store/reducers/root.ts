import { combineReducers } from 'redux';
import accounts from '../reducers/accounts';
import user from '../reducers/user';
import creditCards from '../reducers/creditCards';
import isUserAuthenticated from '../reducers/isUserAuthenticated';
import isLoading from '../reducers/isLoading';
import globalAppConfig from '../reducers/globalAppConfig';
import statusBar from '../reducers/statusBar';
import routesHistory from '../reducers/routesHistory';
import modal from './modal';
import plan from './plan';
import futureDateData from './futureDateData';
import totalDebt from './totalDebt';

const createRootReducer = () =>
  combineReducers({
    accounts,
    user,
    creditCards,
    isUserAuthenticated,
    isLoading,
    modal,
    globalAppConfig,
    statusBar,
    routesHistory,
    plan,
    futureDateData,
    totalDebt,
  });

export default createRootReducer;
