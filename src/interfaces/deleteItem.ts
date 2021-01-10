import { del } from '../api/apiRequestMethods';
import { ITEMS } from '../constants/endpoints';

const deleteItem = (id: string) => del(ITEMS.delete(id));

export default deleteItem;
