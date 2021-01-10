import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import CreditCardData from './CreditCardData';
import cards from '../../mocks/cards';

describe('CreditCardData Functionality', () => {
  it('CreditCardData Button should be pressed', () => {
    const props = {
      card: cards[0],
      onCardPress: jest.fn(),
      index: 0,
    };
    const { getByTestId } = render(<CreditCardData {...props} />);
    const cardData = getByTestId('CreditCardData0');

    fireEvent.press(cardData);
    expect(props.onCardPress.mock.calls.length).toBe(1);
  });
});
