import { useEffect } from 'react';
import trackPaymentPlanEvents from '../analytics/trackPaymentPlanEvents/trackPaymentPlanEvents';
import routes from '../constants/routes';
import { EVENTS } from '../constants/events';
import { Plan } from '../types/Plan';
import { User } from '../store/types/user';

export default (user: User, routesHistory: string[], plan: Plan | null) => {
  useEffect(() => {
    if (routesHistory.length && plan) {
      const lastRoute = routesHistory.slice(-1)[0];

      if (
        lastRoute?.match(routes.PLAN_REVIEW) ||
        lastRoute?.match(routes.PLAN_REVIEW_READONLY)
      ) {
        trackPaymentPlanEvents(
          EVENTS.PLAN_REVIEWED,
          user,
          `${plan.monthly_payment_amount}`,
          plan.estimated_payoff_time || 0,
          plan.estimated_payoff_date || '',
          plan.estimated_savings || 0
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routesHistory.length]);
};
