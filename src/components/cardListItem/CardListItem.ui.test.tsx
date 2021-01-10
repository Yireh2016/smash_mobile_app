import * as React from 'react';
import { View } from 'react-native';
import renderer from 'react-test-renderer';
import CardListItem from './CardListItem';

describe('CardListItem renders correctly', () => {
  it('CardListItem light version', () => {
    const ComponentProps = {
      children: <View />,
      isLight: false,
    };
    const Element = () => {
      return <CardListItem {...ComponentProps} />;
    };

    const rendered = renderer.create(<Element />).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('CardListItem default version', () => {
    const ComponentProps = {
      children: <View />,
    };
    const Element = () => {
      return <CardListItem {...ComponentProps} />;
    };

    const rendered = renderer.create(<Element />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
