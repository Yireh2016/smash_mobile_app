import * as React from 'react';
import renderer from 'react-test-renderer';
import ActionButton from './ActionButton';

it('ActionButton renders correctly', () => {
  const ActionButtonProps = {
    onPress: () => jest.mock(),
    label: 'Test',
  };
  const Element = () => {
    return <ActionButton {...ActionButtonProps} />;
  };

  const actionBtn = renderer.create(<Element />).toJSON();
  expect(actionBtn).toMatchSnapshot();
});
