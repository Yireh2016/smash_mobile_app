import { post } from '../api/apiRequestMethods';
import { PAYMENT_PLAN } from '../constants/endpoints';
export default (data: object) => post(PAYMENT_PLAN.url, data);
