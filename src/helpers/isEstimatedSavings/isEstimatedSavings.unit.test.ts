import isEstimatedSavings from './isEstimatedSavings';

describe('Check if estimated savings should be shown', () => {
  it('Given money string  per year positive and more than zero then it should show estimated savings', () => {
    const result = isEstimatedSavings('3 $/yr');
    expect(result).toBe(true);
  });

  it('Given money string  per year equal to zero then it should not show estimated savings', () => {
    const result = isEstimatedSavings('0 $/yr');
    expect(result).toBe(false);
  });

  it('Given money string  per year positive and  more than 2000 then it should show estimated savings', () => {
    const result = isEstimatedSavings('3,450.43 $/yr');
    expect(result).toBe(true);
  });
});
