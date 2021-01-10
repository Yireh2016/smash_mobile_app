import { post } from '../../api/apiRequestMethods';
import { REFRESH_PLAID_DATA } from '../../constants/endpoints';

/**
 * This post triggers an Plaid data refresh
 */

export default () => post(REFRESH_PLAID_DATA.url);
