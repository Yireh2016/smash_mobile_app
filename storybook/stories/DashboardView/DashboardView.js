import React from 'react';

import { storiesOf } from '@storybook/react-native';

import DashboardView from '../../../src/views/dashboardView/DashboardView';
import formatMoneyValue from '../../../src/helpers/formatMoneyValue/formatMoneyValue';

const cards = [
  {
    name: "Macy's",
    bank: 'Bank of america',
    number: '*5698',
    current_balance: 12000,
    credit_utilization_percentage: 12,
    statement_balance: 120,
    purchase_apr_percentage: 23,
    other_aprs: [],
    min_payment: 456,
    payment_due: '20/07',
  },
  {
    name: "Macy's",
    bank: 'Bank of america',
    number: '*5698',
    current_balance: 12000,
    credit_utilization_percentage: 12,
    statement_balance: 120,
    purchase_apr_percentage: 23,
    other_aprs: [],
    min_payment: 456,
    payment_due: '20/07',
  },
];

const debtPlanCalculatorProps = {
  isEditable: false,
  sliderControl: 5,
  monthlyPayment: formatMoneyValue('986', 2),
  monthlyInput: formatMoneyValue('5'),
  onMonthlyInputChange: (value) => console.log({ value }),
  estimatedPayoffTime: '11 weeks',
  estimatedSavings: '$235 /yr',
  estimatedPayoffDate: 'Dec 12, 2020',
};
export default () =>
  storiesOf('Dashboard Poc View', module)
    .add('Dashboard Poc Empty', () => (
      <DashboardView
        {...debtPlanCalculatorProps}
        isPlanSaved={false}
        totalDebt={'$0'}
        onCreatePlan={() => console.log('onCreatePlan ')}
        onWalletMonitorDetails={() => console.log('onWalletMonitorDetails')}
      />
    ))
    .add('Dashboard Poc plan not saved', () => (
      <DashboardView
        {...debtPlanCalculatorProps}
        totalDebt={'$6.216,55'}
        cards={cards}
        isPlanSaved={false}
        onCreatePlan={() => console.log('onCreatePlan')}
        onWalletMonitorDetails={() => console.log('onWalletMonitorDetails')}
      />
    ))
    .add('Dashboard Poc plan  saved', () => (
      <DashboardView
        {...debtPlanCalculatorProps}
        totalDebt={'$6.216,55'}
        cards={cards}
        isPlanSaved={true}
        onCreatePlan={() => console.log('onCreatePlan')}
        onWalletMonitorDetails={() => console.log('onWalletMonitorDetails')}
      />
    ));
