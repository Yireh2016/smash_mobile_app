import { authDel as del } from '../api/apiRequestMethods';
import { USER } from '../constants/endpoints';

const deleteItem = (email: string) => del(USER.delete(email));

export default deleteItem;
