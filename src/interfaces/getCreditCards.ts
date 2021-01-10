import { get } from '../api/apiRequestMethods';
import { CREDIT_CARDS } from '../constants/endpoints';

const getCreditCards = () => get(CREDIT_CARDS.url);

export default getCreditCards;
