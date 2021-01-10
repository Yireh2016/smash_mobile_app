import React from 'react';

import { storiesOf } from '@storybook/react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import AddCardView from '../../../src/views/onboarding/onboardingAddCardView/OnboardingAddCardView';
import cards from '../../../src/mocks/cards';
import accounts from '../../../src/mocks/accounts';
import AddBankAccount from '../../../src/views/onboarding/addBankAccountView/AddBankAccountView';

const addCardViewProps = {
  onNextPress: () => {},
  onSecurityPress: () => {},
  cards,
  totalDebt: 12345,
};
const addCardViewPropsNoCards = {
  onNextPress: () => {},
  onSecurityPress: () => {},
  totalDebt: 12345,
};

const addBankAccountProps = {
  onNextPress: () => {},
  onAddAccount: () => {},
  onSecurityPress: () => {},
  accounts,
  totalDebt: 12345,
};

const addBankAccountPropsNoAccounts = {
  onNextPress: () => {},
  onSecurityPress: () => {},
  totalDebt: 12345,
};

export default () =>
  storiesOf('Onboarding ', module)
    .add('AddCard View Default', () => (
      <SafeAreaProvider>
        <AddCardView {...addCardViewProps} />
      </SafeAreaProvider>
    ))
    .add('AddCard View no cards', () => (
      <SafeAreaProvider>
        <AddCardView {...addCardViewPropsNoCards} />
      </SafeAreaProvider>
    ))
    .add('Add bank account View', () => (
      <SafeAreaProvider>
        <AddBankAccount {...addBankAccountProps} />
      </SafeAreaProvider>
    ))
    .add('Add bank account View no accounts', () => (
      <SafeAreaProvider>
        <AddBankAccount {...addBankAccountPropsNoAccounts} />
      </SafeAreaProvider>
    ));
