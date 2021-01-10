import { get } from '../../api/apiRequestMethods';
import { CREDIT_CARDS } from '../../constants/endpoints';

/**
 * Get an array of the saved credit cards
 */

/**
 * Response Example
 *
 * {
  "data": [
    {
      "account_id": "5fd931220aa8a900088d421b",
      "bank": "Chase",
      "name": "Credit card 2",
      "number": "5591",
      "current_balance": 2000,
      "credit_utilization_percentage": 10.8,
      "statement_balance": 1800,
      "purchase_apr_percentage": 0,
      "min_payment": 25,
      "payment_due": "2021-01-15",
      "other_aprs": [
        {
          "apr_type": "adjustment",
          "apr_percentage": 0,
          "balance_subject_to_apr": 2000
        }
      ]
    },
  ]
}
 */

export default () => get(CREDIT_CARDS.url);
