import { get } from '../../api/apiRequestMethods';
import { DEBT_PAYMENT_PLAN } from '../../constants/endpoints';

/*
 * get the updated user payment plan for his debt
 */

/**
 * response i.e
 * {
  "data": [
    {
      "_id": "5fd81d5af8bdb2000821a48c",
      "monthly_payment_amount": -1,
      "estimated_payoff_time": -1,
      "estimated_savings": -1,
      "estimated_payoff_date": "",
      "credit_cards": []
    }
  ]
}
 */
export default (query: any) => get(DEBT_PAYMENT_PLAN.url, query);
