import { Card } from '../../types/Card';
import creditUtilizationCalculator from './creditUtilizationCalculator';

describe('Credit Utilization Calculator', () => {
  it('all credit card w/ current balance and credit utilization %', () => {
    const cards: Card[] = [
      {
        account_id: '2u3ywjhedb',
        bank: 'Citi',
        number: '2267',
        current_balance: 500,
        credit_utilization_percentage: 10,
        statement_balance: 2650,
        purchase_apr_percentage: 19,
        min_payment: 65,
        payment_due: '2020-12-18',
        other_aprs: [
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
      },
      {
        account_id: '2u3ywjhedb',
        bank: 'Citi',
        number: '9376',
        current_balance: 2000,
        credit_utilization_percentage: 25,
        statement_balance: 1030,
        purchase_apr_percentage: 21,
        min_payment: 37,
        payment_due: '2020-12-18',
        other_aprs: [
          {
            apr_type: 'purchase_apr',
            apr_percentage: 21,
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
            balance_subject_to_apr: 1100,
          },
        ],
      },
      {
        account_id: '2u3ywjhedb',
        bank: 'Citi',
        number: '9085',
        current_balance: 3000,
        credit_utilization_percentage: 10,
        statement_balance: 1820,
        purchase_apr_percentage: 22,
        min_payment: 42,
        payment_due: '2020-12-18',
        other_aprs: [
          {
            apr_type: 'purchase_apr',
            apr_percentage: 22,
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
            balance_subject_to_apr: 1900,
          },
        ],
      },
    ];

    expect(creditUtilizationCalculator(cards)).toBe((100 * 5500) / 43000);
  });

  it('One credit card without credit utilization ', () => {
    const cards: Card[] = [
      {
        account_id: '2u3ywjhedb',
        bank: 'Citi',
        number: '2267',
        current_balance: 1000,
        credit_utilization_percentage: 0,
        statement_balance: 2650,
        purchase_apr_percentage: 19,
        min_payment: 65,
        payment_due: '2020-12-18',
        other_aprs: [
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
      },
      {
        account_id: '2u3ywjhedb',
        bank: 'Citi',
        number: '9376',
        current_balance: 2000,
        credit_utilization_percentage: 25,
        statement_balance: 1030,
        purchase_apr_percentage: 21,
        min_payment: 37,
        payment_due: '2020-12-18',
        other_aprs: [
          {
            apr_type: 'purchase_apr',
            apr_percentage: 21,
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
            balance_subject_to_apr: 1100,
          },
        ],
      },
      {
        account_id: '2u3ywjhedb',
        bank: 'Citi',
        number: '9085',
        current_balance: 3000,
        credit_utilization_percentage: 10,
        statement_balance: 1820,
        purchase_apr_percentage: 22,
        min_payment: 42,
        payment_due: '2020-12-18',
        other_aprs: [
          {
            apr_type: 'purchase_apr',
            apr_percentage: 22,
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
            balance_subject_to_apr: 1900,
          },
        ],
      },
    ];

    expect(creditUtilizationCalculator(cards)).toBe((100 * 5000) / 38000);
  });

  it('One credit card without current balance', () => {
    const cards: Card[] = [
      {
        account_id: '2u3ywjhedb',
        bank: 'Citi',
        number: '2267',
        current_balance: 0,
        credit_utilization_percentage: 0,
        statement_balance: 2650,
        purchase_apr_percentage: 19,
        min_payment: 65,
        payment_due: '2020-12-18',
        other_aprs: [
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
      },
      {
        account_id: '2u3ywjhedb',
        bank: 'Citi',
        number: '9376',
        current_balance: 2000,
        credit_utilization_percentage: 25,
        statement_balance: 1030,
        purchase_apr_percentage: 21,
        min_payment: 37,
        payment_due: '2020-12-18',
        other_aprs: [
          {
            apr_type: 'purchase_apr',
            apr_percentage: 21,
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
            balance_subject_to_apr: 1100,
          },
        ],
      },
      {
        account_id: '2u3ywjhedb',
        bank: 'Citi',
        number: '9085',
        current_balance: 3000,
        credit_utilization_percentage: 10,
        statement_balance: 1820,
        purchase_apr_percentage: 22,
        min_payment: 42,
        payment_due: '2020-12-18',
        other_aprs: [
          {
            apr_type: 'purchase_apr',
            apr_percentage: 22,
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
            balance_subject_to_apr: 1900,
          },
        ],
      },
    ];

    expect(creditUtilizationCalculator(cards)).toBe((100 * 5000) / 38000);
  });

  it('all credit cards without current balance', () => {
    const cards: Card[] = [
      {
        account_id: '2u3ywjhedb',
        bank: 'Citi',
        number: '2267',
        current_balance: 0,
        credit_utilization_percentage: 0,
        statement_balance: 2650,
        purchase_apr_percentage: 19,
        min_payment: 65,
        payment_due: '2020-12-18',
        other_aprs: [
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
      },
      {
        account_id: '2u3ywjhedb',
        bank: 'Citi',
        number: '9376',
        current_balance: 0,
        credit_utilization_percentage: 25,
        statement_balance: 1030,
        purchase_apr_percentage: 21,
        min_payment: 37,
        payment_due: '2020-12-18',
        other_aprs: [
          {
            apr_type: 'purchase_apr',
            apr_percentage: 21,
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
            balance_subject_to_apr: 1100,
          },
        ],
      },
      {
        account_id: '2u3ywjhedb',
        bank: 'Citi',
        number: '9085',
        current_balance: 0,
        credit_utilization_percentage: 10,
        statement_balance: 1820,
        purchase_apr_percentage: 22,
        min_payment: 42,
        payment_due: '2020-12-18',
        other_aprs: [
          {
            apr_type: 'purchase_apr',
            apr_percentage: 22,
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
            balance_subject_to_apr: 1900,
          },
        ],
      },
    ];

    expect(creditUtilizationCalculator(cards)).toBe(0);
  });
});
