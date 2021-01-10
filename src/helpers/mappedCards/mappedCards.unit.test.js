import mappedCards from './mappedCards';
import cards from '../../mocks/cards';

describe('New card formatter', () => {
  it('Given a card should return a new card format', () => {
    const card = mappedCards([cards[0]]);

    const newCard = {
      account_id: '2u3ywjhedb', // required
      bank_name: 'Citi', // required
      mask: '2267', // required
      next_payment_due_date: '2020-12-18', // required, YYYY-MM-DD
      current_balance: 500,
      purchase_apr_percentage: 19,
      credit_utilization_percentage: 10, // 20% seria 20.00
      minimum_payment_amount: 65, // required
      last_statement_balance: 2650,
      aprs: [
        {
          apr_type: 'purchase_apr',
          apr_percentage: 19,
          balance_subject_to_apr: 0,
        },
        {
          apr_type: 'cash_apr',
          apr_percentage: 27.95,
          balance_subject_to_apr: 0,
        },
        {
          apr_type: 'adjustment',
          apr_percentage: 0,
          balance_subject_to_apr: 3100,
        },
      ],
    };

    expect(card[0]).toStrictEqual(newCard);
  });
});
