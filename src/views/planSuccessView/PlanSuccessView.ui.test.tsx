import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import renderer from 'react-test-renderer';
import PlanSuccessView from './PlanSuccessView';

it('PlanSuccessView renders correctly', () => {
  const props = {
    onDone: jest.fn(),
    payOffDate: '15 months',
  };
  const Element = () => {
    return (
      <SafeAreaProvider>
        <PlanSuccessView {...props} />
      </SafeAreaProvider>
    );
  };

  const rendered = renderer.create(<Element />).toJSON();
  expect(rendered).toMatchSnapshot();
});
