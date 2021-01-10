import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import renderer from 'react-test-renderer';
import SavingStep from './SavingStep';

it('SavingStep renders correctly', () => {
  const ComponentProps = {
    onSignUp: () => jest.fn(),
  };
  const Element = () => {
    return (
      <SafeAreaProvider>
        <SavingStep {...ComponentProps} />
      </SafeAreaProvider>
    );
  };

  const rendered = renderer.create(<Element />).toJSON();
  expect(rendered).toMatchSnapshot();
});
