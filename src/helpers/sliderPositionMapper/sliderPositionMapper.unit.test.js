import {
  getSliderPosFromInputMoney,
  getMoneyFromSliderPosition,
} from './sliderPositionMapper';

describe('Mappers for non lineal money input slider', () => {
  it('Given an amount of money returns the slider position', () => {
    const result = getSliderPosFromInputMoney(100, 1, 1000);
    expect(result).toBe(6.666666666666668);
  });

  it('Given the slider position returns the amount of money that it represents', () => {
    const result = getMoneyFromSliderPosition(6.666666666666668, 1, 1000);
    expect(result).toBe(100.00000000000006);
  });
});
