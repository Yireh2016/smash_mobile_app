import * as React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import renderer from 'react-test-renderer';
import InfoLayout from './InfoLayout';

it('InfoLayout renders correctly', () => {
  const ComponentProps = {
    children: <View />,
    onPress: jest.fn(),
    onSecondaryPress: jest.fn(),
    actionLabel: 'test primary',
    secondaryActionLabel: 'test secondary',
    title: 'test title',
    footer: <View />,
  };
  const Element = () => {
    return (
      <SafeAreaProvider>
        <InfoLayout {...ComponentProps} />
      </SafeAreaProvider>
    );
  };

  const rendered = renderer.create(<Element />).toJSON();
  expect(rendered).toMatchSnapshot();
});
