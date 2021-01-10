import filterCheckingsDepositaryAccounts from './filterCheckingsDepositaryAccounts';
import accounts from '../../mocks/accounts';

describe('filterCheckingsDepositaryAccounts', () => {
  it('Should return CHECKINGS account type accounts given an array of accounts ', () => {
    const result = filterCheckingsDepositaryAccounts(accounts);
    expect(result).toStrictEqual([
      {
        current_balance: 3100,
        id: '5fd97b81f415a00008611fa5',
        institution_name: 'American Express',
        name: 'Test',
        number: '2129',
        purchase_apr_percentage: null,
        subtype: 'checking',
        type: 'depository',
        updated_at: '2020-12-16T12:48:57.292Z',
      },
    ]);
  });

  it('Should return null given null', () => {
    const result = filterCheckingsDepositaryAccounts(null);
    expect(result).toBe(null);
  });

  it('Should return null given a empty array', () => {
    const result = filterCheckingsDepositaryAccounts([]);
    expect(result).toBe(null);
  });
});
