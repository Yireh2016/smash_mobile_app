import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { storiesOf } from '@storybook/react-native';

import PlanReviewView from '../../../src/views/planReviewView/PlanReviewView';
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

export default () =>
  storiesOf('Plan Review', module)
    .addDecorator((getStory) => (
      <SafeAreaProvider>{getStory()}</SafeAreaProvider>
    ))
    .add(' default', () => {
      return (
        <PlanReviewView
          cards={cards}
          onReviewPress={() => console.log('onReviewPress')}
          onDebtPlanDetails={() => console.log('onDebtPlanDetails')}
          onRecommendApproach={() => console.log('onRecommendApproach')}
        />
      );
    });
