import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import renderer from 'react-test-renderer';
import CongratulationsView from './CongratulationsView';

it('CongratulationsView renders correctly', () => {
  const CongratulationsViewProps = {
    onStartPress: () => {},
  };
  const Element = () => {
    return (
      <SafeAreaProvider>
        <CongratulationsView {...CongratulationsViewProps} />
      </SafeAreaProvider>
    );
  };

  const rendered = renderer.create(<Element />).toJSON();
  expect(rendered).toMatchSnapshot();
});
