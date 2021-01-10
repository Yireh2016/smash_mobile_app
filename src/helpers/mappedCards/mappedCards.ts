import { AprPair, Card } from '../../types/Card';

export default (cards: Card[]) =>
  cards.map((card: Card) => {
    const {
      account_id,
      bank,
      number,
      current_balance,
      credit_utilization_percentage,
      statement_balance,
      purchase_apr_percentage,
      other_aprs,
      min_payment,
      payment_due,
    } = card;

    const aprs = other_aprs.map((apr: AprPair) => {
      const { balance_subject_to_apr, apr_percentage, apr_type } = apr;
      return {
        apr_percentage: apr_percentage,
        balance_subject_to_apr: balance_subject_to_apr,
        apr_type,
      };
    });
    return {
      account_id,
      bank_name: bank,
      mask: number,
      current_balance,
      credit_utilization_percentage,
      purchase_apr_percentage,
      aprs,
      last_statement_balance: statement_balance,
      minimum_payment_amount: min_payment,
      next_payment_due_date: payment_due,
    };
  });
