import React from 'react';

import { storiesOf } from '@storybook/react-native';

import PlaidBanksLinksView from '../../../src/components/plaidBanksLinks/PlaidBanksLinks';

export default () =>
  storiesOf('PlaidLinks', module).add('PlaidLinks', () => {
    return <PlaidBanksLinksView />;
  });
