import { PLANS } from '../constants/endpoints';
import { get } from '../api/apiRequestMethods';

const getPlan = (query: any) => get(PLANS.url, query);
export default getPlan;
