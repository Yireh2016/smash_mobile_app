import { post } from '../api/apiRequestMethods';
import { REFRESH_PLAID_DATA } from '../constants/endpoints';
export default () => post(REFRESH_PLAID_DATA.url);
