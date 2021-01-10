import * as React from 'react';
import { Text, View } from 'react-native';
import renderer from 'react-test-renderer';
import SmashModal from './SmashModal';

it('SmashModal  renders correctly', () => {
  const ComponentProps = {
    body: <View />,
    children: <View />,
    title: <Text>test</Text>,
    isModal: true,
  };
  const Element = () => {
    return <SmashModal {...ComponentProps} />;
  };

  const rendered = renderer.create(<Element />).toJSON();
  expect(rendered).toMatchSnapshot();
});
