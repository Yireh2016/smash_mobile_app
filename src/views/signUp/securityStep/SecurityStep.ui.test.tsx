import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import renderer from 'react-test-renderer';
import SecurityStep from './SecurityStep';

it('SecurityStep renders correctly', () => {
  const ComponentProps = {
    onSignUp: () => jest.fn(),
  };
  const Element = () => (
    <SafeAreaProvider>
      <SecurityStep {...ComponentProps} />
    </SafeAreaProvider>
  );
  const rendered = renderer.create(<Element />).toJSON();
  expect(rendered).toMatchSnapshot();
});
