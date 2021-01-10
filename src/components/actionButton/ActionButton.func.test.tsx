import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import ActionButton from './ActionButton';

describe('Action button Functionality', () => {
  it('Button should be pressed', () => {
    const onPress = jest.fn();

    const ActionButtonProps = {
      onPress,
      label: 'Test',
    };
    const { getByTestId } = render(<ActionButton {...ActionButtonProps} />);
    const actionBtn = getByTestId('ActionButton');

    fireEvent.press(actionBtn);
    expect(onPress.mock.calls.length).toBe(1);
  });
});
