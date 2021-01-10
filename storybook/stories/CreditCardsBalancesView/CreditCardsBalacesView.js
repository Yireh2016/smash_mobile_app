import React from 'react';

import { storiesOf } from '@storybook/react-native';

import CreditCardsBalancesView from '../../../src/views/creditCardsBalancesView/CreditCardsBalancesView';

export default () =>
  storiesOf('Credit Cards Balances', module).add('Default', () => {
    return <CreditCardsBalancesView />;
  });
