import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import renderer from 'react-test-renderer';
import NotificationsView from './NotificationsView';

it('NotificationsView renders correctly', () => {
  const ComponentProps = {
    onNotNow: () => jest.fn(),
    onAllow: () => jest.fn(),
  };
  const Element = () => {
    return (
      <SafeAreaProvider>
        <NotificationsView {...ComponentProps} />
      </SafeAreaProvider>
    );
  };

  const rendered = renderer.create(<Element />).toJSON();
  expect(rendered).toMatchSnapshot();
});
