import React from 'react';

import { storiesOf } from '@storybook/react-native';

import CongratulationsView from '../../../src/views/onboarding/congratsView/CongratulationsView';
import logger from '../../../src/helpers/logger/logger';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default () =>
  storiesOf('Congratulations View', module).add('Default', () => {
    return (
      <SafeAreaProvider>
        <CongratulationsView
          onStartPress={() => logger({ str: 'onStartPress' })}
        />
      </SafeAreaProvider>
    );
  });
