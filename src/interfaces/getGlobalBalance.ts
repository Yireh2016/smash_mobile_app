import { get } from '../api/apiRequestMethods';
import { BALANCES } from '../constants/endpoints';

const getGlobalBalance = () => get(BALANCES.url);

export default getGlobalBalance;
