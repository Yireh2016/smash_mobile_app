import { post } from '../../api/apiRequestMethods';
import { ACCESS } from '../../constants/endpoints';

/**
 * this request saves the institution selected on the plaid link view
 */

export default (institutionData: object) => post(ACCESS.url, institutionData);
