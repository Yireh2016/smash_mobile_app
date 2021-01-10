import truncateText from './truncateText';

describe('Truncate string to specific length', () => {
  it('Given a string larger than the default max length (10 characters) returns an string with exact length of 10', () => {
    const result = truncateText('12345678901');
    expect(result).toBe('1234567...');
    expect(result).toHaveLength(10);
  });

  it('Given a string shorter than or equal the default max length (10 characters) returns the same string', () => {
    const result = truncateText('12345');
    const result2 = truncateText('1234567890');
    expect(result).toBe('12345');
    expect(result).toHaveLength(5);

    expect(result2).toBe('1234567890');
    expect(result2).toHaveLength(10);
  });

  it('Given a string larger than the input max length (n characters) returns an string with exact length of n', () => {
    const result = truncateText('1234567890', 6);
    expect(result).toBe('123...');
    expect(result).toHaveLength(6);
  });

  it('Given a string shorter than or equal to  the input max length max length (n characters) returns the same string', () => {
    const result = truncateText('12345', 6);
    const result2 = truncateText('123456', 6);

    expect(result).toBe('12345');
    expect(result).toHaveLength(5);

    expect(result2).toBe('123456');
    expect(result2).toHaveLength(6);
  });
});
