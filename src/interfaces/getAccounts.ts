import { get } from '../api/apiRequestMethods';
import { ACCOUNTS } from '../constants/endpoints';

const getAccounts = () => get(ACCOUNTS.url);

export default getAccounts;
