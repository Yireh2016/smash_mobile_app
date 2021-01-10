import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import renderer from 'react-test-renderer';
import accounts from '../../../mocks/accounts';
import AddBankAccountView from './AddBankAccountView';
const AddBankAccountViewProps = {
  onNextPress: () => {},
  onAddAccountSuccess: () => {},
  onSecurityPress: () => {},
  accounts,
  totalDebt: 1234,
};

describe('', () => {
  it('AddBankAccountView onboarding view with accounts renders correctly', () => {
    const Element = () => {
      return (
        <SafeAreaProvider>
          <AddBankAccountView {...AddBankAccountViewProps} />
        </SafeAreaProvider>
      );
    };

    const rendered = renderer.create(<Element />).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('AddBankAccountView onboarding view without accounts renders correctly', () => {
    const AddBankAccountViewProps2 = JSON.parse(
      JSON.stringify(AddBankAccountViewProps)
    );
    AddBankAccountViewProps2.accounts = null;
    AddBankAccountViewProps2.totalDebt = 0;
    const Element = () => {
      return (
        <SafeAreaProvider>
          <AddBankAccountView {...AddBankAccountViewProps2} />
        </SafeAreaProvider>
      );
    };

    const rendered = renderer.create(<Element />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
