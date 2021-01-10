import { post } from '../api/apiRequestMethods';
import { PLANS } from '../constants/endpoints';
import { PlanStore } from '../types/Plan';
export default (plan: PlanStore) =>
  post(PLANS.url, {
    ...plan,
  });
