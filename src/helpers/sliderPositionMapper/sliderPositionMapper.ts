export const getSliderPosFromInputMoney = (
  money: number,
  minValue: number,
  maxValue: number
) => {
  if (minValue) {
    return money && maxValue
      ? 10 * (Math.log(money / minValue) / Math.log(maxValue / minValue))
      : 0;
  }

  return (10 * Math.log(money)) / Math.log(maxValue);
};

export const getMoneyFromSliderPosition = (
  position: number,
  minValue: number,
  maxValue: number
) => {
  if (minValue) {
    return minValue * Math.pow(maxValue / minValue, position / 10);
  }

  return position ? Math.pow(maxValue, position / 10) : 0;
};
