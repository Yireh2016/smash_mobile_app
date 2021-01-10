import { PLAID } from '../../constants/endpoints';
import { get } from '../../api/apiRequestMethods';

/**
 * get plaid link token for plaid link view
 */

export default () => get(PLAID.url);
