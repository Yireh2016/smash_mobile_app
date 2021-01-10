import { get } from '../../api/apiRequestMethods';
import { ACCOUNTS } from '../../constants/endpoints';

/**
 * get an array of the saved accounts
 */

/*** example response
 * {
  "accounts": [
    {
      "id": "5fd9186336cea500089d3067",
      "institution_name": "Chase",
      "name": "Credit card 2",
      "current_balance": 2000,
      "type": "credit",
      "subtype": "credit card",
      "updated_at": "2020-12-15T21:56:50.040Z",
      "number": "5591",
      "purchase_apr_percentage": null
    },
  ]
}
 */
export default () => get(ACCOUNTS.url);
