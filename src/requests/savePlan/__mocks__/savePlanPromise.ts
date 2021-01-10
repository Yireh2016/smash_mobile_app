import { capitalize } from 'lodash';
import apiRequest from 'src/helpers/apiRequest/apiRequest';
import { PlanStore } from 'src/types/Plan';

const setPlanOnStore = jest.fn();
const setDebtPaymentPlan = () => new Promise((resolve) => resolve(true));

export default async (plan: PlanStore, name: string) =>
  await apiRequest({
    data: {
      monthly_payment_amount: plan.unsavedPlan?.monthly_payment_amount,
      estimated_payoff_time: plan.unsavedPlan?.estimated_payoff_time,
      estimated_savings: plan.unsavedPlan?.estimated_savings,
      estimated_payoff_date: plan.unsavedPlan?.estimated_payoff_date,
      credit_cards: plan.unsavedPlan?.credit_cards,
    },
    request: setDebtPaymentPlan,
    successCallback: (res: any) => {
      const planRes = res.data;
      const planCopy = plan;
      planCopy.savedPlan = planRes;
      setPlanOnStore(planCopy);
    },
    loader: {
      enable: true,
      title: 'Working on your plan',
      message: `Creating a personalized plan for ${capitalize(name)}…`,
    },
  });
