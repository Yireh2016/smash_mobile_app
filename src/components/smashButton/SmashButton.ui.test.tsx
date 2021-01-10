import * as React from 'react';
import renderer from 'react-test-renderer';
import SmashButton from './SmashButton';

describe('SmashButton renders correctly', () => {
  it('SmashButton primary renders correctly', () => {
    const ComponentProps = {
      label: 'test',
      onPress: () => {},
    };
    const Element = () => {
      return <SmashButton {...ComponentProps} />;
    };

    const rendered = renderer.create(<Element />).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('SmashButton secondary renders correctly', () => {
    const ComponentProps = {
      label: 'test',
      onPress: () => {},
      type: 'secondary',
    };
    const Element = () => {
      return <SmashButton {...ComponentProps} />;
    };

    const rendered = renderer.create(<Element />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
