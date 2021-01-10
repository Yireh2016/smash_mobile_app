import { Card } from '../../types/Card';

const reducedArr = (arr: number[] | never[]) =>
  arr.length > 0
    ? arr.reduce((previous: number, current: number) => previous + current)
    : 0;

export default (cards: Card[]) => {
  const currentBalanceSum = reducedArr(
    cards
      .filter(
        (card: Card) =>
          card.credit_utilization_percentage > 0 && card.current_balance > 0
      )
      .map((card: Card) => card.current_balance)
  );

  const utilizationSum = reducedArr(
    cards
      .filter(
        (card: Card) =>
          card.credit_utilization_percentage > 0 && card.current_balance > 0
      )
      .map(
        (card: Card) =>
          card.current_balance / (card.credit_utilization_percentage / 100)
      )
  );

  return utilizationSum ? (100 * currentBalanceSum) / utilizationSum : 0;
};
