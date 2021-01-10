// /* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CreditCardStep from '../../../src/views/signUp/creditCardStep/CreditCardStep';
import SecurityStep from '../../../src/views/signUp/securityStep/SecurityStep';
import WalletStep from '../../../src/views/signUp/walletStep/WalletStep';
import SavingStep from '../../../src/views/signUp/savingStep/SavingStep';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default () =>
  storiesOf('SignUp Carrousel', module)
    .addDecorator((getStory) => (
      <SafeAreaProvider>{getStory()}</SafeAreaProvider>
    ))
    .add('Step one Credit Card', () => <CreditCardStep />)
    .add('Step two Security', () => <SecurityStep />)
    .add('Step three Wallet', () => <WalletStep />)
    .add('Step four Saving', () => <SavingStep />);
