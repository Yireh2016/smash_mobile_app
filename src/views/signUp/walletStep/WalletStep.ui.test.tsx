import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import renderer from 'react-test-renderer';
import WalletStep from './WalletStep';

it('WalletStep renders correctly', () => {
  const ComponentProps = {
    onSignUp: () => jest.fn(),
  };
  const Element = () => (
    <SafeAreaProvider>
      <WalletStep {...ComponentProps} />
    </SafeAreaProvider>
  );
  const rendered = renderer.create(<Element />).toJSON();
  expect(rendered).toMatchSnapshot();
});
