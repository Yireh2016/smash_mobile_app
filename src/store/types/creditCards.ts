import { SET_CREDIT_CARDS, RESET_CREDIT_CARDS } from '../constants';
import { Card } from '../../types/Card';

export interface SetCreditCardsAction {
  type: typeof SET_CREDIT_CARDS | typeof RESET_CREDIT_CARDS;
  payload: Card[];
}
