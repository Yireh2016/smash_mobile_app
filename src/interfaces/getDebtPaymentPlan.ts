import { get } from '../api/apiRequestMethods';
import { DEBT_PAYMENT_PLAN } from '../constants/endpoints';

const getDebtPaymentPlan = (query: any) => get(DEBT_PAYMENT_PLAN.url, query);

export default getDebtPaymentPlan;
