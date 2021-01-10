import { authDel as del } from '../../api/apiRequestMethods';
import { USER } from '../../constants/endpoints';

/**
 * disable the smash user account
 */
export default (email: string) => del(USER.delete(email));
