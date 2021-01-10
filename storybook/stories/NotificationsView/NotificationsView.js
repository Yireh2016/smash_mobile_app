import React from 'react';

import { storiesOf } from '@storybook/react-native';

import NotificationsView from '../../../src/views/notificationsView/NotificationsView';
import { action } from '@storybook/addon-actions';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default () =>
  storiesOf('NotificationsView', module).add('LinkedAccountsView', () => {
    const props = {
      onNotNow: action('onNotNow'),
      onAllow: action('onAllow'),
    };
    return (
      <SafeAreaProvider>
        <NotificationsView {...props} />
      </SafeAreaProvider>
    );
  });
