import paymentCalculator from './paymentCalculator';
const futureData = [
  {
    apr_percentage: 13,
    balance_subject_to_apr: 3100,
  },
  {
    apr_percentage: 14,
    balance_subject_to_apr: 1900,
  },
  {
    apr_percentage: 0,
    balance_subject_to_apr: 1100,
  },
];

describe('Payment Days Calculator based on cards debt and aprs', () => {
  it('Given an low input amount of money returns Infiniy because is insufficient to payoff the debt', () => {
    const result = paymentCalculator(50, futureData);
    expect(result).toBe(Infinity);
  });

  it('Given an input amount of money returns the debt payoff numbers of days', () => {
    const result = paymentCalculator(500, futureData);
    expect(result).toBe(384.49610935846374);
  });

  it('Given no input amount of money returns null', () => {
    const result = paymentCalculator(0, futureData);
    expect(result).toBe(null);
  });
});
