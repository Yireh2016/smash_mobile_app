import * as React from 'react';
import renderer from 'react-test-renderer';
import MiniButton from './MiniButton';

it('MiniButton renders correctly', () => {
  const MiniButtonProps = {
    onPress: () => jest.mock(),
    label: 'Test',
  };
  const Element = () => {
    return <MiniButton {...MiniButtonProps} />;
  };

  const redered = renderer.create(<Element />).toJSON();
  expect(redered).toMatchSnapshot();
});
