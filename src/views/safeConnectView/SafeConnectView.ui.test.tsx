import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import renderer from 'react-test-renderer';
import SafeConnectView from './SafeConnectView';

it('SafeConnectView renders correctly', () => {
  const ComponentProps = {
    onAddPlaidItemSuccess: () => jest.fn(),
    onPlaidLinkExit: () => jest.fn(),
  };
  const Element = () => {
    return (
      <SafeAreaProvider>
        <SafeConnectView {...ComponentProps} />
      </SafeAreaProvider>
    );
  };

  const rendered = renderer.create(<Element />).toJSON();
  expect(rendered).toMatchSnapshot();
});
