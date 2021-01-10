import { get } from '../api/apiRequestMethods';
import { CALCULATOR } from '../constants/endpoints';

const getCalculator = () => get(CALCULATOR.url);

export default getCalculator;
