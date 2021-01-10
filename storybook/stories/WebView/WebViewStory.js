import React from 'react';

import { storiesOf } from '@storybook/react-native';

import BanksLinksView from '../../../src/views/banksLinks/BanksLinksView';

export default () =>
  storiesOf('Webview', module).add('FastLink', () => {
    return <BanksLinksView />;
  });
