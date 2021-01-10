import { del } from '../../api/apiRequestMethods';
import { ITEMS } from '../../constants/endpoints';

/**
 * delete account and cards associated
 */

export default (id: string) => del(ITEMS.delete(id));
