import React from 'react';

import { storiesOf } from '@storybook/react-native';

import LinkedAccountsView from '../../../src/views/linkedAccountsView/LinkedAccountsView';

const linkedAccounts = [
  {
    institution_name: 'Wells Fargo',
    name: 'Discover Premium',
    current_balance: 1234,
    type: 'type',
    updated_at: `${new Date()}`,
    number: '0987',
  },
  {
    institution_name: 'Wells Fargo',
    name: 'Discover ',
    current_balance: 1234,
    type: 'type',
    updated_at: `${new Date()}`,
    number: '0987',
  },
  {
    institution_name: 'Bank of America',
    name: 'Cheking',
    current_balance: 1234,
    type: 'type',
    updated_at: `${new Date()}`,
    number: '0987',
  },
  {
    institution_name: 'Bank of America',
    name: 'Visa Gold',
    current_balance: 452,
    type: 'credit',
    updated_at: `${new Date()}`,
    number: '9876',
  },
  {
    institution_name: 'Citibank',
    name: 'Cheking',
    current_balance: 1234,
    type: 'type',
    updated_at: `${new Date()}`,
    number: '0987',
  },
  {
    institution_name: 'Citibank',
    name: 'Visa Gold',
    current_balance: 452,
    type: 'credit',
    updated_at: `${new Date()}`,
    number: '9876',
  },
  {
    institution_name: 'Chase',
    name: 'Discover Premium',
    current_balance: 1234,
    type: 'type',
    updated_at: `${new Date()}`,
    number: '0987',
  },
  {
    institution_name: 'Chase',
    name: 'Discover ',
    current_balance: 1234,
    type: 'type',
    updated_at: `${new Date()}`,
    number: '0987',
  },
];
export default () =>
  storiesOf('LinkedAccountsView', module).add('LinkedAccountsView', () => {
    return (
      <LinkedAccountsView
        linkedAccounts={linkedAccounts}
        navigation={{
          navigate: (route) => {
            console.log('going to ', route);
          },
        }}
      />
    );
  });
