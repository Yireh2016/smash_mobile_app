import { get } from '../../api/apiRequestMethods';
import { CALCULATOR } from '../../constants/endpoints';

/**
 * get an array of apr, balance pairs for every credit card
 */

/** Example
{
  "data": [
    {
      "apr_percentage": 0,
      "balance_subject_to_apr": 2000
    },
    {
      "apr_percentage": 0,
      "balance_subject_to_apr": 3100
    },
  ]
}
*/
export default () => get(CALCULATOR.url);
