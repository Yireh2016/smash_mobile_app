import { SET_CREDIT_CARDS, RESET_CREDIT_CARDS } from '../constants';
import { SetCreditCardsAction } from '../types/creditCards';
import { Card } from '../../types/Card';

const initialState: Card[] | null = null;
const setCreditCards = (action: SetCreditCardsAction) => action.payload;
const resetCreditCards = () => null;
export default (state = initialState, action: SetCreditCardsAction) => {
  switch (action.type) {
    case SET_CREDIT_CARDS: {
      return setCreditCards(action);
    }
    case RESET_CREDIT_CARDS: {
      return resetCreditCards();
    }
    default:
      return state;
  }
};
