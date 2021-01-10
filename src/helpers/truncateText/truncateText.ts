export default (str: string, maxStringLength = 10) =>
  str.length > maxStringLength
    ? str.slice(0, maxStringLength - 3).concat('...')
    : str;
