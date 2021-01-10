import formatMoneyValue from './formatMoneyValue';

describe('Format money string into an $string representation', () => {
  it('Given money string  negative then it returns a zero string without $', () => {
    const result = formatMoneyValue('-3');
    expect(result).toBe('0');
  });

  it('Given money string positive or zero then it returns a string with $', () => {
    const result = formatMoneyValue('3');
    expect(result).toBe('$3');
  });

  it('Given money string positive or zero then it returns a string with $ and 2 decimal values', () => {
    const result = formatMoneyValue('3', 2);
    expect(result).toBe('$3.00');
  });
});
