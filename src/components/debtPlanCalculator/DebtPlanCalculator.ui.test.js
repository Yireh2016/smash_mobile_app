import * as React from 'react';
import renderer from 'react-test-renderer';
import DebtPlanCalculator from './DebtPlanCalculator';
describe('', () => {
  it('DebtPlanCalculator w estimated Savings renders correctly', () => {
    const props = {
      isEditable: true,
      sliderControl: 8,
      monthlyPayment: null,
      monthlyInput: '937',
      onMonthlyInputChange: () => jest.mock(),
      estimatedPayoffTime: '27 weeks',
      estimatedSavings: '$300 /yr',
      estimatedPayoffDate: 'Dec 12, 2020',
    };

    const Element = () => {
      return <DebtPlanCalculator {...props} />;
    };

    const elementRendered = renderer.create(<Element />).toJSON();
    expect(elementRendered).toMatchSnapshot();
  });

  it('DebtPlanCalculator with no estimated Savings renders correctly', () => {
    const props = {
      isEditable: true,
      sliderControl: 8,
      monthlyPayment: null,
      monthlyInput: '937',
      onMonthlyInputChange: () => jest.mock(),
      estimatedPayoffTime: '27 weeks',
      estimatedSavings: '$0 /yr',
      estimatedPayoffDate: 'Dec 12, 2020',
    };

    const Element = () => {
      return <DebtPlanCalculator {...props} />;
    };

    const elementRendered = renderer.create(<Element />).toJSON();
    expect(elementRendered).toMatchSnapshot();
  });
});
