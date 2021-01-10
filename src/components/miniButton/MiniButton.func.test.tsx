import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import MiniButton from './MiniButton';

describe('Minibutton Functionality', () => {
  it('Button should be pressed', () => {
    const onPress = jest.fn();

    const MiniButtonProps = {
      onPress,
      label: 'Test',
    };
    const { getByTestId } = render(<MiniButton {...MiniButtonProps} />);
    const miniBtn = getByTestId('MiniButton');

    fireEvent.press(miniBtn);
    expect(onPress.mock.calls.length).toBe(1);
  });
});
