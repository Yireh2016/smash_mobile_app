/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import CreditCardData from '../../../src/components/creditCardData/CreditCardData';
import CenterLayout from '../../../src/layouts/centerLayout/CenterLayout';
import theme from '../../../src/theme/theme';

const card = {
  bank: 'Discover',
  name: 'Credit card 2',
  number: '7254',
  current_balance: 1900,
  credit_utilization_percentage: 9.9,
  statement_balance: 1820,
  purchase_apr_percentage: 22,
  min_payment: 42,
  payment_due: '2020-12-16',
  other_aprs: [
    {
      apr_type: 'purchase_apr',
      apr_percentage: 22,
      balance_subject_to_apr: 0,
    },
    {
      apr_type: 'cash_apr',
      apr_percentage: 27.95,
      balance_subject_to_apr: 0,
    },
    {
      apr_type: 'adjustment',
      apr_percentage: 0,
      balance_subject_to_apr: 1900,
    },
  ],
};
export default () =>
  storiesOf('Credit Card Detail Data', module)
    .addDecorator((getStory) => (
      <CenterLayout color={theme.palette.primary}>
        {
          <View style={{ width: '100%', paddingLeft: 17, paddingRight: 17 }}>
            {getStory()}
          </View>
        }
      </CenterLayout>
    ))
    .add('Default', () => (
      <CreditCardData card={card} onCardPress={console.log('card pressed')} />
    ));

// const styles = StyleSheet.create({
//   threeColumnsLayout: {
//     display: 'flex',
//     flexDirection: 'row',
//   },
//   threeColumnsContainer: {
//     flexGrow: 3,
//   },
//   alignRight: {
//     alignItems: 'flex-end',
//   },
//   alignCenter: {
//     alignItems: 'center',
//   },
// });

/**
 *   account_id: string;
  bank: string;
  number: string;
  current_balance: number;
  credit_utilization_percentage: number;
  statement_balance: number;
  purchase_apr_percentage: number;
  other_aprs: AprPair[];
  min_payment: number;
  payment_due: string;


  {
  "data": [
    {
      "account_id": "5fb2bc750d4bcb00085e9179",
      "bank": "Citi",
      "name": "Credit card",
      "number": "9283",
      "current_balance": 3100,
      "credit_utilization_percentage": 29,
      "statement_balance": 2650,
      "purchase_apr_percentage": 19,
      "min_payment": 65,
      "payment_due": "2020-12-13",
      "other_aprs": [
        {
          "apr_type": "purchase_apr",
          "apr_percentage": 19,
          "balance_subject_to_apr": 0
        },
        {
          "apr_type": "cash_apr",
          "apr_percentage": 27.95,
          "balance_subject_to_apr": 0
        },
        {
          "apr_type": "adjustment",
          "apr_percentage": 0,
          "balance_subject_to_apr": 3100
        }
      ]
    },
    {
      "account_id": "5fb2bc750d4bcb00085e917c",
      "bank": "Discover",
      "name": "Credit card",
      "number": "7011",
      "current_balance": 3100,
      "credit_utilization_percentage": 23.3,
      "statement_balance": 2650,
      "purchase_apr_percentage": 19,
      "min_payment": 65,
      "payment_due": "2020-12-16",
      "other_aprs": [
        {
          "apr_type": "purchase_apr",
          "apr_percentage": 19,
          "balance_subject_to_apr": 0
        },
        {
          "apr_type": "cash_apr",
          "apr_percentage": 27.95,
          "balance_subject_to_apr": 0
        },
        {
          "apr_type": "adjustment",
          "apr_percentage": 0,
          "balance_subject_to_apr": 3100
        }
      ]
    },
    {
      "account_id": "5fb2bc750d4bcb00085e9182",
      "bank": "Discover",
      "name": "Credit card 3",
      "number": "9984",
      "current_balance": 1100,
      "credit_utilization_percentage": 64.7,
      "statement_balance": 1030,
      "purchase_apr_percentage": 21,
      "min_payment": 37,
      "payment_due": "2020-12-16",
      "other_aprs": [
        {
          "apr_type": "purchase_apr",
          "apr_percentage": 21,
          "balance_subject_to_apr": 0
        },
        {
          "apr_type": "cash_apr",
          "apr_percentage": 27.95,
          "balance_subject_to_apr": 0
        },
        {
          "apr_type": "adjustment",
          "apr_percentage": 0,
          "balance_subject_to_apr": 1100
        }
      ]
    },
    {
      "account_id": "5fb2bc750d4bcb00085e917f",
      "bank": "Discover",
      "name": "Credit card 2",
      "number": "7254",
      "current_balance": 1900,
      "credit_utilization_percentage": 9.9,
      "statement_balance": 1820,
      "purchase_apr_percentage": 22,
      "min_payment": 42,
      "payment_due": "2020-12-16",
      "other_aprs": [
        {
          "apr_type": "purchase_apr",
          "apr_percentage": 22,
          "balance_subject_to_apr": 0
        },
        {
          "apr_type": "cash_apr",
          "apr_percentage": 27.95,
          "balance_subject_to_apr": 0
        },
        {
          "apr_type": "adjustment",
          "apr_percentage": 0,
          "balance_subject_to_apr": 1900
        }
      ]
    }
  ]
}


 */
