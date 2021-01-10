import { AUTH } from '../../constants/endpoints';
import { authGet as get } from '../../api/apiRequestMethods';

/**
 * Get user creation date
 */

export default (username: string) => get(AUTH.createdAt(username));
