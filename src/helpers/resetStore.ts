import {
  resetAccount,
  resetUser,
  resetCreditCards,
  resetIsUserAuth,
  resetRouteHistory,
  resetPlan,
  resetFutureData,
  resetTotalDebt,
} from '../store/actions/actions';

const resetStore = () => {
  resetAccount();
  resetUser();
  resetCreditCards();
  resetIsUserAuth();
  resetRouteHistory();
  resetPlan();
  resetFutureData();
  resetTotalDebt();
};

export default resetStore;
