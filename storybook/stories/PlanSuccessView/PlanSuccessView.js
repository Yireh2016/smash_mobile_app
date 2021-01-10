import React from 'react';

import { storiesOf } from '@storybook/react-native';

import PlanSuccessView from '../../../src/views/planSuccessView/PlanSuccessView';
import { action } from '@storybook/addon-actions';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default () =>
  storiesOf('Plan Success View', module).add('LinkedAccountsView', () => {
    const props = {
      onDone: action('onNotNow'),
      payOffDate: '15 months',
    };
    return (
      <SafeAreaProvider>
        <PlanSuccessView {...props} />
      </SafeAreaProvider>
    );
  });
