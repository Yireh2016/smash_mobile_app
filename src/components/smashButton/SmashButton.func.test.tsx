import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import SmashButton from './SmashButton';

describe('Minibutton Functionality', () => {
  it('Button should be pressed', () => {
    const onPress = jest.fn();

    const ComponentProps = {
      onPress,
      label: 'Test',
      testID: 'SmashButton',
    };
    const { getByTestId } = render(<SmashButton {...ComponentProps} />);
    const SmashBtn = getByTestId('SmashButton');

    fireEvent.press(SmashBtn);
    expect(onPress.mock.calls.length).toBe(1);
  });
});
