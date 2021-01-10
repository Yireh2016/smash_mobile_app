import calculateTotalAccountBalance from './calculateTotalAccountBalance';
import accounts from '../../mocks/accounts';

describe('calculateTotalAccountBalance', () => {
  it('Given an array of accounts It should calculate the total account balance', () => {
    const result = calculateTotalAccountBalance(accounts);
    expect(result).toBe(9200);
  });
  it('Given null It should returns 0', () => {
    const result = calculateTotalAccountBalance(null);
    expect(result).toBe(0);
  });
  it('Given void array It should returns 0', () => {
    const result = calculateTotalAccountBalance([]);
    expect(result).toBe(0);
  });
});
