const isEstimatedSavings = (estimatedSavings: string) => {
  const estimatedSavingsNumber = estimatedSavings.match(/\d./);
  if (estimatedSavingsNumber) {
    return parseInt(estimatedSavingsNumber[0], 10) > 0;
  }
  return false;
};
export default isEstimatedSavings;
