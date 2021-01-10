import { SET_PLAN, RESET_PLAN } from '../constants';
import { PlanStore, SetPlanAction } from '../../types/Plan';

const initialState: PlanStore | null = null;
const setPlan = (action: SetPlanAction) => action.payload;
const resetPlan = () => null;
export default (state = initialState, action: SetPlanAction) => {
  switch (action.type) {
    case SET_PLAN: {
      return setPlan(action);
    }
    case RESET_PLAN: {
      return resetPlan();
    }
    default:
      return state;
  }
};
