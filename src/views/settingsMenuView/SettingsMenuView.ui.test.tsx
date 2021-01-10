import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import renderer from 'react-test-renderer';
import SettingsMenuView from './SettingsMenuView';

it('SettingsMenuView renders correctly', () => {
  const Element = () => {
    // const navigation = useNavigation<any>();
    const ComponentProps = {
      fullname: 'fullname',
      date: '2001-01-01',
      signOut: jest.fn(),
      deleteSmashAccount: jest.fn(),
      emailURL: 'test@test.test',
    };
    return (
      <SafeAreaProvider>
        <SettingsMenuView {...ComponentProps} />
      </SafeAreaProvider>
    );
  };

  const rendered = renderer.create(<Element />).toJSON();
  expect(rendered).toMatchSnapshot();
});
