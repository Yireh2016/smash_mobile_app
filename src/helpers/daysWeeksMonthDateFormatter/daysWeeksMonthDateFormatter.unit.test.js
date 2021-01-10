import daysWeeksMonthDateFormatter from './daysWeeksMonthDateFormatter';

describe('Map days numbers into days, week and month string accordingly', () => {
  it('Given negative number of days returns void string', () => {
    const result = daysWeeksMonthDateFormatter(-1);
    expect(result).toBe('');
  });
  it('Given 0 number of days returns 0 days', () => {
    const result = daysWeeksMonthDateFormatter(0);
    expect(result).toBe('0 days');
  });
  it('Given a positive number of days less or equal to 60 returns number of days', () => {
    const result = daysWeeksMonthDateFormatter(60);
    const result2 = daysWeeksMonthDateFormatter(3);
    expect(result).toBe('60 days');
    expect(result2).toBe('3 days');
  });

  it('Given a positive number of days greater than 60 and less or equal to 360 returns number of weeks', () => {
    const result = daysWeeksMonthDateFormatter(61);
    const result2 = daysWeeksMonthDateFormatter(360);
    expect(result).toBe('8 weeks');
    expect(result2).toBe('51 weeks');
  });
  it('Given a positive number of days greater than 360 returns number of months', () => {
    const result = daysWeeksMonthDateFormatter(361);
    const result2 = daysWeeksMonthDateFormatter(1000);

    expect(result).toBe('11 months');
    expect(result2).toBe('32 months');
  });

  it('Given Infinite days returs a - character', () => {
    const result = daysWeeksMonthDateFormatter(Infinity);
    expect(result).toBe('-');
  });
});
