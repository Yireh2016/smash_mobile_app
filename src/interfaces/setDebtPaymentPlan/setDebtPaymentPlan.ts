import { Plan } from '../../types/Plan';
import { post } from '../../api/apiRequestMethods';
import { DEBT_PAYMENT_PLAN } from '../../constants/endpoints';

/**
 * Save the new debt payment plan
 */

export default (data: Plan) => post(DEBT_PAYMENT_PLAN.url, data);
