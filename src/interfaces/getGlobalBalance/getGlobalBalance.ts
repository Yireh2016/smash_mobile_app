import { get } from '../../api/apiRequestMethods';
import { BALANCES } from '../../constants/endpoints';

/**
 * get the credit cards total balances and total utilization percentage
 */

/**
 * response Example
 * {
  "data": {
    "credit_card": {
      "current_balance": 15300,
      "utilization_percentage": 22.6
    }
  }
}
 */
export default () => get(BALANCES.url);
