import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { storiesOf } from '@storybook/react-native';

import PlanSettingsView from '../../../src/views/planSettingsView/PlanSettingsView';
import formatMoneyValue from '../../../src/helpers/formatMoneyValue/formatMoneyValue';

const debtPlanCalculatorProps = {
  isEditable: true,
  sliderControl: 5,
  monthlyPayment: formatMoneyValue('986', 2),
  monthlyInput: formatMoneyValue('5'),
  onMonthlyInputChange: (value) => console.log({ value }),
  estimatedPayoffTime: '11 weeks',
  estimatedSavings: '$235 /yr',
  estimatedPayoffDate: 'Dec 12, 2020',
};

export default () =>
  storiesOf('PlanSettingsView', module)
    .addDecorator((getStory) => (
      <SafeAreaProvider>{getStory()}</SafeAreaProvider>
    ))
    .add('PlanSettingsView default', () => {
      return (
        <PlanSettingsView
          {...debtPlanCalculatorProps}
          totalDebt={formatMoneyValue('968', 2)}
          onReviewPress={() => console.log('onReviewPress')}
        />
      );
    });
