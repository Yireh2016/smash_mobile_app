import React from 'react';
import { Provider } from 'react-redux';

import { storiesOf } from '@storybook/react-native';
import { NavigationContainer } from '@react-navigation/native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import AddCardsView from '../../../src/views/addCardsView/AddCardsView';
import store from '../../../src/store/store';

export default () =>
  storiesOf('AddCardsView View', module)
    .addDecorator((getStory) => <Provider store={store}>{getStory()}</Provider>)
    .addDecorator((getStory) => (
      <NavigationContainer>{getStory()}</NavigationContainer>
    ))
    .add('Default', () => {
      return (
        <SafeAreaProvider>
          <AddCardsView
            token="test"
            onAddCardSuccess={() => {}}
            onCancel={() => {}}
          />
        </SafeAreaProvider>
      );
    });
