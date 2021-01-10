import { head } from '../../api/apiRequestMethods';
import { ITEMS } from '../../constants/endpoints';

/**
 * checks if there are linked accoutns
 */

export default () => head(ITEMS.url);
