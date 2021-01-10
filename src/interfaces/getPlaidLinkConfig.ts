import { PLAID } from '../constants/endpoints';
import { get } from '../api/apiRequestMethods';

const getPlaidLinkConfig = () => get(PLAID.url);
export default getPlaidLinkConfig;
